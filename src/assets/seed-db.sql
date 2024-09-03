-- Active: 1722077677025@@localhost@5432@pos-db

INSERT INTO categories (id, code, name)
VALUES
    ('6e5c70ca-670f-40a7-8267-e933078a7e94','FOOD', 'Foods'),
    ('9f2b7eb8-15ac-4b1e-82aa-7c7f31f4a710', 'DRINK', 'Drinks');

SELECT * from categories;
SELECT * from products;

INSERT INTO products (code, category_id, name, stock, unit_price, sell_price)
VALUES
    ('FDPZ', '6e5c70ca-670f-40a7-8267-e933078a7e94', 'Pizza Hut', 10, 20000, 22000),
    ('DRCC', '9f2b7eb8-15ac-4b1e-82aa-7c7f31f4a710', 'Coca Cola', 8, 10000, 12000),
    ('FDBG', '6e5c70ca-670f-40a7-8267-e933078a7e94', 'Burger Sweet', 5, 13000, 15000);