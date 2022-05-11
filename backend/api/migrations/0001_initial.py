# Generated by Django 4.0.4 on 2022-04-20 07:43

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='JobTracker',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('job_title', models.CharField(max_length=60)),
                ('company_name', models.CharField(max_length=60)),
                ('application_starts_on', models.DateField(blank=True)),
                ('application_ends_on', models.DateField(blank=True)),
                ('package_offered', models.IntegerField(max_length=5)),
                ('is_referral_system_available', models.BooleanField(default=False)),
                ('referee_details', models.TextField(blank=True, max_length=100)),
                ('status', models.CharField(max_length=20)),
                ('created_on', models.DateField(default=datetime.date.today)),
                ('modified_on', models.DateField(auto_now=True)),
            ],
        ),
    ]