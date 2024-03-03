from django.contrib import admin
from api import models

class UserAdmin(admin.ModelAdmin):
    list_display = [field.name for field in models.User._meta.fields]

class CityAdmin(admin.ModelAdmin):
    list_display = [field.name for field in models.City._meta.fields]

class LocationAdmin(admin.ModelAdmin):
    list_display = [field.name for field in models.Location._meta.fields]

class QuestAdmin(admin.ModelAdmin):
    list_display = [field.name for field in models.Quest._meta.fields]

class QuestRegistrationAdmin(admin.ModelAdmin):
    list_display = [field.name for field in models.QuestRegistration._meta.fields]

class RewardAdmin(admin.ModelAdmin):
    list_display = [field.name for field in models.Reward._meta.fields]

class RequirementAdmin(admin.ModelAdmin):
    list_display = [field.name for field in models.Requirement._meta.fields]

class LanguageAdmin(admin.ModelAdmin):
    list_display = [field.name for field in models.Language._meta.fields]

class InternetFacilityAdmin(admin.ModelAdmin):
    list_display = [field.name for field in models.InternetFacility._meta.fields]

class CityDetailAdmin(admin.ModelAdmin):
    list_display = [field.name for field in models.CityDetail._meta.fields]

admin.site.register(models.User, UserAdmin)
admin.site.register(models.City, CityAdmin)
admin.site.register(models.Location, LocationAdmin)
admin.site.register(models.Quest, QuestAdmin)
admin.site.register(models.QuestRegistration, QuestRegistrationAdmin)
admin.site.register(models.Reward, RewardAdmin)
admin.site.register(models.Requirement, RequirementAdmin)
admin.site.register(models.Language, LanguageAdmin)
admin.site.register(models.InternetFacility, InternetFacilityAdmin)
admin.site.register(models.CityDetail, CityDetailAdmin)
