from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, relationship
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, String, Integer, Date, ForeignKey, Float, Boolean
import os


engine_sql_lite = create_engine("sqlite:///database.db", connect_args={
    "check_same_thread": False})
Session = sessionmaker(bind=engine_sql_lite)
Base = declarative_base(bind=engine_sql_lite)


def get_db():
    db = Session()
    try:
        yield db
    finally:
        db.close()


class Report(Base):
    __tablename__ = "report"
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('user.id'))
    complited = Column(Boolean, default=False)
    anses = relationship('Ans', lazy='dynamic')


class Ans(Base):
    __tablename__ = "ans"
    id = Column(Integer,  primary_key=True)
    report_id = Column(Integer, ForeignKey('report.id'))
    step = Column(Integer)
    ans = Column(String(128))


class User(Base):
    __tablename__ = "user"
    id = Column(Integer, primary_key=True)
    email = Column(String(128))
    password = Column(String(256))
    profile = relationship('UserDocument', lazy='joined')
    reports = relationship('Report', lazy='dynamic')


class UserDocument(Base):
    __tablename__ = "user_documents"
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('user.id'))
    passportGiveDate = Column(Date)
    passportCode = Column(String(32))
    passportGiveBy: Column(Date)
    passportBirthCity: Column(String(32))
    snilsId: Column(String(128))
    regStreet: Column(String(128))
    regHouse: Column(String(128))
    regFlat: Column(String(128))


class Region(Base):
    """Регионы """
    __tablename__ = "region"
    id = Column(Integer, primary_key=True)
    name = Column(String(128))

    incomes = relationship('IncomeRegion', lazy='dynamic')
    losses = relationship('LossRegion', lazy='dynamic')
    debts = relationship('OverdueDebtRegion', lazy='dynamic')


class District(Base):
    """Районы"""
    __tablename__ = "district"
    id = Column(Integer, primary_key=True)
    name = Column(String(128))

    incomes = relationship('IncomeDistrict', lazy='dynamic')
    losses = relationship('LossDistrict', lazy='dynamic')
    debts = relationship('OverdueDebtDistrict', lazy='dynamic')


class City(Base):
    """Города"""
    __tablename__ = "city"
    id = Column(Integer, primary_key=True)
    name = Column(String(128))

    incomes = relationship('IncomeCity', lazy='dynamic')
    losses = relationship('LossCity', lazy='dynamic')
    debts = relationship('OverdueDebtCity', lazy='dynamic')


class Organization(Base):
    """Организации"""
    __tablename__ = "organization"
    id = Column(Integer, primary_key=True)
    name = Column(String(256))

    # Заработные платы
    wages = relationship('WagesOrganization', lazy='dynamic')
    incomes = relationship('IncomeOrganization', lazy='dynamic')
    losses = relationship('LossOrganization', lazy='dynamic')
    debts = relationship('OverdueDebtOrganization', lazy='dynamic')


class AverageMonthlyAccruedSalaryOfEmployees(Base):
    """Среднемесячная начисленная заработная плата работников организаций, не относящихся к субъектам 
    малого предпринимательства, средняя численность работников которых превышает 15 человек, 
    по городским округам и муниципальным районам Удмуртской Республики"""
    __tablename__ = "averge_monthly_accrued_salary_of_employees"
    id = Column(Integer, primary_key=True)
    region_id = Column(Integer, ForeignKey('region.id'),
                       default=None, nullable=True)
    city_id = Column(Integer, ForeignKey('city.id'),
                     default=None, nullable=True)
    # Очётный месяц
    count = Column(Integer)
    date = Column(Date)


class BelowTheValueLivingWage(Base):
    """Доля населения с 
    денежными доходами
    ниже величины 
    прожиточного минимума"""

    __tablename__ = "BelowTheValueLivingWage"
    id = Column(Integer, primary_key=True)
    year = Column(Date)
    persent = Column(Float)


class SocioEconomicIndicators(Base):
    """ОСНОВНЫЕ СОЦИАЛЬНО-ЭКОНОМИЧЕСКИЕ ИНДИКАТОРЫ УРОВНЯ ЖИЗНИ НАСЕЛЕНИЯ"""
    __tablename__ = "SocioEconomicIndicators"
    id = Column(Integer, primary_key=True)
    name = Column(String(256))

    count = Column(Integer)
    date = Column(Date)


class WagesOrganization(Base):
    """ЗАРАБОТНАЯ ПЛАТА ОРГАНИЗАЦИИ"""
    __tablename__ = "WagesOrganization"
    id = Column(Integer, primary_key=True)
    organization_id = Column(Integer, ForeignKey('organization.id'))
    count = Column(Integer)
    date = Column(Date)


class IncomeRegion(Base):
    """Доходы регионов"""
    __tablename__ = "IncomeRegion"
    id = Column(Integer, primary_key=True)
    region_id = Column(Integer, ForeignKey('region.id'))
    date = Column(Date)
    count = Column(Integer)


class IncomeDistrict(Base):
    """Доходы области"""
    __tablename__ = "IncomeDistrict"
    id = Column(Integer, primary_key=True)
    district_id = Column(Integer, ForeignKey('district.id'))
    date = Column(Date)
    count = Column(Integer)


class IncomeCity(Base):
    """Доходы городов"""
    __tablename__ = "IncomeCity"
    id = Column(Integer, primary_key=True)
    city_id = Column(Integer, ForeignKey('city.id'))
    date = Column(Date)
    count = Column(Integer)


class IncomePopulation(Base):
    """Доходы населения"""
    __tablename__ = "IncomePopulation"
    id = Column(Integer, primary_key=True)
    date = Column(Date)
    count = Column(Integer)


class IncomeOrganization(Base):
    """Доходы организации"""
    __tablename__ = "IncomeOrganization"
    id = Column(Integer, primary_key=True)
    organization_id = Column(Integer, ForeignKey('organization.id'))
    date = Column(Date)
    count = Column(Integer)


class LossOrganization(Base):
    """Убытки организации"""
    __tablename__ = "LossOrganization"
    id = Column(Integer, primary_key=True)
    organization_id = Column(Integer, ForeignKey('organization.id'))
    date = Column(Date)
    count = Column(Integer)


class LossPopulation(Base):
    """Убытки населения"""
    __tablename__ = "LossPopulation"
    id = Column(Integer, primary_key=True)
    date = Column(Date)
    count = Column(Integer)


class LossDistrict(Base):
    """Убытки областей"""
    __tablename__ = "LossDistrict"
    id = Column(Integer, primary_key=True)
    district_id = Column(Integer, ForeignKey('district.id'))
    date = Column(Date)
    count = Column(Integer)


class LossRegion(Base):
    """Убытки регионов"""
    __tablename__ = "LossRegion"
    id = Column(Integer, primary_key=True)
    region_id = Column(Integer, ForeignKey('region.id'))
    date = Column(Date)
    count = Column(Integer)


class LossCity(Base):
    """Убытки городов"""
    __tablename__ = "LossCity"
    id = Column(Integer, primary_key=True)
    city_id = Column(Integer, ForeignKey('city.id'))
    date = Column(Date)
    count = Column(Integer)


class OverdueDebtOrganization(Base):
    """Просроченная задолженность по заработной плате работников организаций обследуемых видов экономической деятельности"""
    __tablename__ = "OverdueDebtOrganization"
    id = Column(Integer, primary_key=True)
    organization_id = Column(Integer, ForeignKey('organization.id'))
    date = Column(Date)
    count = Column(Integer)


class OverdueDebtRegion(Base):
    """Просроченная задолженность по заработной плате регионов"""
    __tablename__ = "OverdueDebtRegion"
    id = Column(Integer, primary_key=True)
    region_id = Column(Integer, ForeignKey('region.id'))
    date = Column(Date)
    count = Column(Integer)


class OverdueDebtCity(Base):
    """Просроченная задолженность по заработной плате городов"""
    __tablename__ = "OverdueDebtCity"
    id = Column(Integer, primary_key=True)
    region_id = Column(Integer, ForeignKey('city.id'))
    date = Column(Date)
    count = Column(Integer)


class OverdueDebtDistrict(Base):
    """Просроченная задолженность по заработной плате областей"""
    __tablename__ = "OverdueDebtDistrict"
    id = Column(Integer, primary_key=True)
    region_id = Column(Integer, ForeignKey('district.id'))
    date = Column(Date)
    count = Column(Integer)


class DepositsOfIndividuals(Base):
    """Вклады (депозиты) физических лиц на рублевых счетах"""
    __tablename__ = "DepositsOfIndividuals"
    id = Column(Integer, primary_key=True)
    date = Column(Date)
    count = Column(Integer)


class DebtsOfIndividuals(Base):
    """Задолженность по рублевым кредитам физических лиц"""
    __tablename__ = "DebtsOfIndividuals"
    id = Column(Integer, primary_key=True)
    date = Column(Date)
    count = Column(Integer)


class ServicesOrProductsOfThePrice(Base):
    """Прайс покупок услуг или предметов или еды"""
    __tablename__ = "ServicesOrProductsOfThePrice"
    id = Column(Integer, primary_key=True)
    name = Column(String(256))
    unit = Column(String(64))
    price = Column(Float)
    date = Column(Date)


Base.metadata.create_all(engine_sql_lite)
