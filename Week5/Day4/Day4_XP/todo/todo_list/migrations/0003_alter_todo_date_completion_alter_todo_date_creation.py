# Generated by Django 4.2 on 2023-05-15 13:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo_list', '0002_alter_category_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todo',
            name='date_completion',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='todo',
            name='date_creation',
            field=models.DateField(auto_now_add=True),
        ),
    ]
