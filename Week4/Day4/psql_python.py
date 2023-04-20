import psycopg2

HOSTNAME = 'localhost'
USERNAME = 'nikolai'  # postgres
PASSWORD = '36Suguhoho'
DATABASE = 'Hollywood'


connection = psycopg2.connect(
    host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE)


def run_query(query: str):

    with connection.cursor() as cursor:
        # cursor - query runner
        cursor.execute(query)
        # cursor.fetchall returns all data from the cursor
        result = cursor.fetchall()

    return result


def select_column(column_name: str, table_name: str) -> str:
    query = f'select {column_name} from {table_name}'
    return query


# select first_name, last_name, number_oscars from actors;

# def select_columns(columns: list[str], table_name: str) -> str:
#     start = 'select '

#     columns_str = ''
#     for idx, column in enumerate(columns):
#         columns_str += column
#         if idx < len(columns) - 1:
#             columns_str += ','

#     end = f' from {table_name}'

#     query = start + columns_str + end
#     return query


def select_columns(columns: list[str], table_name: str) -> str:
    start = 'select '

    columns_str = ", ".join(columns)

    end = f' from {table_name}'

    query = start + columns_str + end
    return query


columns = ['movie_id', 'movie_title']
q: str = select_columns(columns, 'movies')
# query = select_column('first_name', 'actors')

output = run_query(q)
print(output)
