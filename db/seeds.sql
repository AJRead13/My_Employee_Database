INSERT INTO department (name)
VALUES  ("Engineering"),
        ("Command"),
        ("Medical"),
        ("Science"),
        ("Tactical");

INSERT INTO role (department_id, title, salary)
VALUES  (1, "Chief Engineer", 120000),
        (1, "Assistant Chief Engineer", 90000),
        (1, "Engineer", 70000),
        (1, "Technician", 45000),
        (2, "Helmsman", 65000),
        (2, "Navigator", 72500),
        (2, "Captain", 150000),
        (2, "Security Officer", 80000),
        (3, "Chief Medical Officer", 115000),
        (3, "Doctor", 97500),
        (3, "Nurse", 75000),
        (4, "Chief Science Officer", 100000),
        (4, "Biologist", 80000),
        (4, "Physicist", 82500),
        (4, "Chemist", 85000),
        (4, "Lab Tech", 50000),
        (5, "Chief Tactical Officer", 105000),
        (5, "Sergeant", 60000),
        (5, "Lieutenant", 67500),
        (5, "Corporal", 47500);

INSERT INTO employee (first_name, last_name, role_id, manager)
VALUES  ("Geordi", "LaForge", 1, NULL),
        ("Jean-Luc", "Picard", 7, NULL),
        ("Worf", NULL, 8, "Riker"),
        ("Beverly", "Crusher", 9, NULL),
        ("Data", NULL, 12, NULL),
        ("Wesley", "Crusher", 5, "Picard"),
        ("William", "Riker", 17, "Picard"),
        ("Reginald", "Barkley", 3, "Laforge"),
        ("Miles", "O'Brien", 5, "Laforge"),
        ("James", "Dean", 6, "Picard"),
        ("Sarah", "Buchanan", 15, "Data"),
        ("Gertrude", "Flump", 19, "Worf"),
        ("Alyssa", "Ogawa", 11, "Crusher");