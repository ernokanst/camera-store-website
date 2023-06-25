from django.contrib import admin
from datetime import timedelta, time, datetime
from django.core.mail import send_mail, mail_admins
from django.utils import timezone
from django.utils.timezone import make_aware
from .models import Category, StoreItem, Order
from instant.producers import publish


class OrderAdmin(admin.ModelAdmin):
    actions = ["send_report"]

    @admin.action(description="Отчёт о заказах")
    def send_report(self, request, queryset):
        today = timezone.now()
        tomorrow = today + timedelta(1)
        #today_start = make_aware(datetime.combine(today, time()))
        #today_end = make_aware(datetime.combine(tomorrow, time()))
        #orders = Order.objects.filter(confirmed_date__range=(today_start, today_end))
        if queryset:
            message = ""
            for order in queryset:
                message += f"{order.user} заказал(а) {', '.join([x.name for x in order.items.all()])} и "
                if order.payment:
                    message += f"уже оплатил(а). "
                else:
                    message += f"оплатит при получении. "
                match order.delivery:
                    case 0:
                        message += f"Получение в магазине.\n"
                    case 1:
                        message += f"Необходимо доставить по адресу: {order.address}.\n"
                    case 2:
                        message += f"Необходимо доставить в ПВЗ по адресу: {order.address}.\n"
            subject = (
                f"Отчёт о заказах"
            )
            mail_admins(subject=subject, message=message, html_message=None)


class StoreItemAdmin(admin.ModelAdmin):
    actions = ["announce_items"]

    @admin.action(description="Анонсировать товар")
    def announce_items(self, request, queryset):
        if queryset:
            for item in queryset:
                publish("announcements", f"В нашем магазине теперь продаётся {item.name}! Всего за {item.price}₽!")


admin.site.register(StoreItem, StoreItemAdmin)
admin.site.register(Category)
admin.site.register(Order, OrderAdmin)
