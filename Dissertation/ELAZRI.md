# Introduction

L’interopérabilité des système informatique est la capacité que possède ces derniers à fonctionner avec d’autres produits ou systèmes informatiques, sans restriction d’accès ou de mise en œuvre. On ne peut pas parler de l’interopérabilité sans aborder le rôle des interfaces, c'est le dispositif qui permet les échanges et interactions entre différents acteurs. Seule, la connaissance exhaustive des interfaces d’un produit ou d’un système permet d’en garantir l’interopérabilité.

# Le web : un bon exemple de l'interopérabilité

Pour mieux comprendre le concept de l’interopérabilité, prenant d'abord l'exemple du modèle TCP/IP :

|  Le modèle TCP/IP		 |
--------------------------
| Couche Application
| Couche Transport
| Couche Internet
| Couche Accès réseau

Chaque couche du modèle TCP/IP a une fonction précise : **La couche Accès réseau** spécifie la forme sous laquelle les données doivent être acheminées selon l'infrastructure physique, **la couche Internet** est chargée de fournir le paquet de données (datagramme), ** la couche Transport** assure l'acheminement des données, ainsi que les mécanismes permettant de connaître l'état de la transmission, et **la couche Application** représente l'ensemble des applications qui permettent aux utilisateurs. Les protocoles de de chaque couches sont complètement différents et pourtant la communication entre les niveaux du modèle TCP/IP se fait en toute fluidité grâce aux interfaces qui permettent la lecture des données provenant des couches inférieures. Cet exemple illustre bien la notion de l'interopérabilité entre les différents protocoles de communication. 
On se concentre plus sur la 4ème couche (**Couche Application**) qui contient la plupart des applications liée au web comme le **HTTP**, **SMTP**, **DNS**, etc. Le Web se base sur une architecture Client-serveur, donc ces deux acteurs doivent être interopérables pour que la communication soit établis, pour cela les serveur web ainsi que les navigateur web communique à travers un langage connu appelé **HTML** et combiné bien sur avec d'autre protocole de communication tels que **HTTP**.
On peut parler aussi des données qui circulent sur le web, et qui n'ont pas forcément le même format. En effet, on peut distingué deux types de données qu'on peut trouver: **données structurées** ( les base de données), et **les données non structurées** (texte, image, documents,..), pour remédier à ce problème d'hétérogénéité et assurer l'interopérabilité l'organisme de standardisation a conçu le langage XML qui facilite la communication automatisé de contenus complexes.

# L’interopérabilité et Big Data

Dans l'ère du Big Data, l’interopérabilité représente un enjeux crucial. Aujourd’hui la donnée est devenue la perle rare que tout les acteurs du numérique cherchent, pour en extraire des informations stratégiques. Heureusement les sources de données deviennent de plus en plus accessible grâce à la politique de l'Open Data, mais reste à savoir si nos systèmes d'informations et modèles d'intelligence artificielles seront capables de comprendre et interpréter toutes les données venu de différentes sources, et sous divers formats . C'est en ce moment que peut remarquer l'importance de  l’interopérabilité afin de garantir l'échange et la récupération de ces données, la standardisation peut être une des solutions.

# Conclusion
Moi, autant que futur Data Scientist, je serai amener à manipuler une grande masse de données récupérée depuis plusieurs sources, et qui seront de différents formats, donc je me confronterai sûrement à des problèmes de compatibilité, pour remédier à ces obstacles, la communauté informatique et les grands acteurs de ce domaine sont obligés à créer des standards et des normes afin de suivre l'évolution technologique est assurer la fluidité de la communication.
