from django.core.mail import mail_admins
from .models import Order
from backend.celery import app


@app.task
def send_report():
    orders = Order.objects.all()
    if orders:
        message = ""
        for order in orders:
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
