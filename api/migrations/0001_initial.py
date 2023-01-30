# Generated by Django 4.1.5 on 2023-01-06 12:31

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Users',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='', max_length=8, unique=True)),
                ('age', models.CharField(max_length=2, unique=True)),
            ],
        ),
    ]
