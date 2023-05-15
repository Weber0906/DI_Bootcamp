from django import template
from datetime import date

register = template.Library()

@register.filter
def has_deadline_passed(todo):
    return todo.deadline_date < date.today()

@register.filter
def is_deadline_close(todo):
    deadline_delta = todo.deadline_date - date.today()
    return deadline_delta.days < 2

@register.filter
def is_deadline_far(todo):
    deadline_delta = todo.deadline_date - date.today()
    return deadline_delta.days > 7

@register.filter
def is_completed_before_deadline(todo):
    return todo.date_completion and todo.date_completion < todo.deadline_date



