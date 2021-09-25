import datetime
from sqlalchemy.orm import session
from database.database import *
import random
import datetime


def test_region():
    list_regions = [
        'Республика Башкортостан',
        'Республика Марий Эл',
        'Республика Мордовия',
        'Республика Татарстан',
        'Удмуртская Республика',
        'Чувашская Республика',
        'Пермский край',
        'Кировская область',
        'Нижегородская область',
        'Оренбургская область',
        'Пензенская область',
        'Самарская область',
        'Саратовская область',
        'Ульяновская область'
    ]

    db = Session()

    def get_random(from_count: int, count: int):
        return random.randint(from_count, count)
    # Создаём регоин
    for region in list_regions:
        region = Region(name=region)
        year = 2016

        db.add(region)
        for i in range(0, 60):
            date = datetime.date(year, i % 12+1, 1)
            if i % 11 == 0 and i != -0:
                year += 1
            region.incomes.append(IncomeRegion(
                date=date, count=get_random(20000, 70000)))
            region.losses.append(LossRegion(
                date=date, count=get_random(20000, 70000)))
            region.debts.append(OverdueDebtRegion(
                date=date, count=get_random(20000, 70000)))

        db.commit()

    district_list = ["Алнашский муниципальный район", "Балезинский муниципальный район",
                     "Вавожский муниципальный район", "Воткинский муниципальный район", "Глазовский муниципальный район "]

    for distirict in district_list:
        distirict = District(name=distirict)
        db.add(distirict)
        year = 2016
        for i in range(0, 60):
            date = datetime.date(year, i % 12+1, 1)
            if i % 11 == 0 and i != -0:
                year += 1
            distirict.incomes.append(IncomeDistrict(
                date=date, count=get_random(20000, 70000)))
            distirict.losses.append(LossDistrict(
                date=date, count=get_random(20000, 70000)))
            distirict.debts.append(OverdueDebtDistrict(
                date=date, count=get_random(20000, 70000)))

        db.commit()

    city_list = ['Ижевск', 'Воткинс', 'Глазов', 'Можга', 'Сарапул']

    for city in city_list:
        city = City(name=city)
        db.add(city)
        year = 2016

        for i in range(0, 60):
            date = datetime.date(year, i % 12+1, 1)
            if i % 11 == 0 and i != -0:
                year += 1
            city.incomes.append(IncomeCity(
                date=date, count=get_random(20000, 70000)))
            city.losses.append(LossCity(
                date=date, count=get_random(20000, 70000)))
            city.debts.append(OverdueDebtCity(
                date=date, count=get_random(20000, 70000)))

    organization_list = ['сельское, лесное хозяйство, охота, рыболовство и рыбоводство добыча полезных ископаемых',
                         'обрабатывающие производства',
                         'обеспечение электрической энергией, газом и паром',
                         'кондиционирование воздуха',
                         'водоснабжение',
                         'водоотведение, организация сбора и утилизации отходов, деятельность по ликвидации загрязнений',
                         'строительство',
                         'торговля оптовая и розничная',
                         'ремонт автотр.средств и мотоциклов',
                         'транспортировка и хранение',
                         'деятельность гостиниц и предприятий общественного питания',
                         'деятельность в области информации и связи',
                         'деятельность финансовая и страховая',
                         'деятельность по операциям с недвижимым имуществом',
                         'деятельность профессиональная, научная и техническая',
                         'деятельность административная и сопутствующие допуслуги',
                         'государственное управление и обеспечение военной безопасности',
                         'социальное обеспечение',
                         'образование',
                         'деятельность в области здравоохранения и социальных услуг',
                         'деятельность в области культуры, спорта, организации досуга и развлечений',
                         'предоставление прочих видов услуг']
    db.commit()

    for organization in organization_list:
        organization = Organization(name=organization)
        db.add(organization)
        year = 2016
        for i in range(0, 60):
            date = datetime.date(year, i % 12+1, 1)
            if i % 11 == 0 and i != -0:
                year += 1
            organization.incomes.append(IncomeOrganization(
                date=date, count=get_random(20000, 200000)))
            organization.losses.append(LossOrganization(
                date=date, count=get_random(20000, 200000)))
            organization.debts.append(OverdueDebtOrganization(
                date=date, count=get_random(20000, 200000)))

        db.commit()

    service_list = [('Молоко', 'л'), ('Сыр', 'кг'), ('Хлеб', 'кг'), ('Колбаса', 'кг'), ('Арбуз', 'кг'),
                    ('Дыня', 'кг'), ('Сахар', 'кг'), ('Соль', 'кг'), ('Шоколад', 'кг'), ('Кофе', 'кг'), ('Чай', 'кг')]
    for service in service_list:
        year = 2016
        for i in range(0, 60):
            date = datetime.date(year, i % 12+1, 1)
            if i % 11 == 0 and i != -0:
                year += 1
            db.add(ServicesOrProductsOfThePrice(
                name=service[0], date=date, price=get_random(0, 200), unit=service[1]))
            db.commit()
    db.close()


test_region()
