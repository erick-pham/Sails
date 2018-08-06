SELECT * FROM public.user;
SELECT * FROM public.project;
SELECT * FROM public.work;
SELECT * FROM public.absen;
SELECT * FROM public.plan;
SELECT * FROM public.team;
SELECT * FROM public.position;
SELECT * FROM public.project_attends__user_projects;

INSERT INTO public.position("createdAt","updatedAt","name")
VALUES(Now(),Now(),'PM'),
(Now(),Now(),'Tester'),
(Now(),Now(),'Dev');

INSERT INTO public.project("createdAt","updatedAt","title","startDate")
VALUES(Now(),Now(),'Business',Now()),
(Now(),Now(),'Economy',Now()),
(Now(),Now(),'Travel',Now()),
(Now(),Now(),'Dev',Now());

INSERT INTO public.project_attends__user_projects("project_attends","user_projects")
VALUES(1,1),
(2,1);

INSERT INTO public.work
("createdAt","updatedAt","title","workLoad","completeDate","owner","project")
VALUES(Now(),Now(),'Design',5.5,null,1,1),
(Now(),Now(),'Code',5.5,null,1,1),
(Now(),Now(),'Test',5.5,null,1,1),
(Now(),Now(),'Deloy',5.5,null,1,1);

INSERT INTO public.plan
("createdAt","updatedAt","title","workLoad","workDate","owner","project")
VALUES(Now(),Now(),'Code',5.5,null,1,1),
(Now(),Now(),'Review',5.5,null,1,1),
(Now(),Now(),'Code',5.5,null,1,2),
(Now(),Now(),'Test',5.5,Now(),1,2);