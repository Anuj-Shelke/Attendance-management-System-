# Import Base and all models to ensure declarative metadata is complete
from server.app.database.session import Base
from server.app.database.models import (
    User,
    Teacher,
    Student,
    Subject,
    Attendance,
    Mark,
    Assignment,
    RiskPrediction,
    Meeting,
    Intervention,
    AuditLog,
)

__all__ = [
    "Base",
    "User",
    "Teacher",
    "Student",
    "Subject",
    "Attendance",
    "Mark",
    "Assignment",
    "RiskPrediction",
    "Meeting",
    "Intervention",
    "AuditLog",
]
