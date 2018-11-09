# Dissertation Open Data : Interopérabilité

## Définition
En informatique, l'interopérabilité aussi appelé interfonctionnement, désigne la capacité de matériels, logiciels ou de protocoles différents à fonctionner ensemble et à partager des informations.
Un système est dit interopérable si il peut fonctionner et communiquer avec d'autres systèmes existants ou futurs sans restriction d'accès.

L'interopérabilité se distingue en trois catégories : 
 - l'interopérabilité technique désigne la capacité d'échanger des données selon des normes d'interface.
 - l'interopérabilité sémantique assure que ces données sont bien comprises et interprétées correctement et de la même façon par les différents systèmes.
 - l'interopérabilité syntaxique signifie que les données sont correctement représentées (selon leur nature, leur format...) pour un utilisateur humain.

Pour que tout cela fonctionne correctement, il faut des normes clairement établies. Deux systèmes étrangers obéissants à ces normes pourrons communiquer sans problèmes.
Dans le meilleur des cas, ces normes sont définies de façon collaborative et transparente par des associations à but non lucratif et dans "l’intérêt général" (W3C, ISOC...).
En pratique, ce sont aujourd'hui les géants du web (GAFAM) qui de par leurs poids dans la création numérique imposent leurs standards qui par la suite deviennent des normes. 

Le développement des systèmes de communications mondiaux (téléphone, internet, réseaux sociaux, mail, communication numérique à l’intérieur et entre les entreprises, e-commerce...) met en relation et rend dépendants des groupes humains variés et hétérogènes. Ce développement s'accompagne de l'apparition de matériels informatiques et de logiciels aux procédés et aux buts très différents.
L'interopérabilité de tous ces systèmes devient alors une nécessité impérieuse pour le bon fonctionnement de nos sociétés complexes hyper connectées.

## L'interopérabilité sur le web
L'architecture web à été pensée dès le début pour être interopérable. Le W3C a été le grand acteur de l'interfonctionnement du web sous l'impulsion de son fondateur Tim Berners-Lee.
Aujourd'hui, il existe des normes pour toutes les fonctionnalités du web (ce qui ne veut pas dire que l’intégralité du web obéit à ces normes) :

 - le protocole HTTP développé pour le World Wild Web est le protocole de communication qui permet à n'importe quel client d'échanger avec n'importe quel serveur si une connexion existe entre eux.
 - le langage HTML est le langage interprété par les navigateurs web pour représenter des pages web. Il permet de structurer et de mettre en forme les pages et d'y insérer toutes sortes de contenus (texte, image, son, liens hypertexte...). De ce langage en découle d'autres comme le XHTML, le XSLT, le SVG...
 - Le modèle RDF est destiné à décrire les ressources du web au travers de métadonnées. Ces métadonnées peuvent ensuite être traitées de manière automatique.
 - Le SPARQL est le protocole qui permet de manipuler (créer, modifier, supprimer) les données RDF.
 - ...
 
 La liste est longue et si respecter toutes ces normes est contraignant pour le développeur web, cela présente des avantages énormes au niveau global. 
 N'importe quelle donnée pourra être comprise, interprétée et représentée par des matériels divers (PC, Mac, smartphone...). Les données pourront même être représentées de différentes façon. Un document pourra être représenté graphiquement, ou en texte, ou décris pour les non-voyants...
 De plus, un document n'aura pas besoin d'être reproduit pour différents navigateurs, puisque ceux-ci seront tous capables de le comprendre.

L'interopérabilité du web est observable dans la vie de tout les jours. Nous communiquons et échangeons des contenus de tous formats, nous utilisons des navigateurs différents, des matériels différents (PC, Mac, smartphone...), nous avons des fournisseurs internet différents... et pourtant, tout cela fonctionne (plutôt) bien.

## Interopérabilité et Data Science 
De même qu'un menuisier travail le bois, un data scientiste travail les données (+1 point pour la poésie svp). Dans nos emploies actuels et futurs, nous sommes donc très dépendants de l'accès aux données. Quels sont les avantages de l'interopérabilité du web pour un data scientiste ?

L'interopérabilité du web combiné à l'Open Data nous garantit que nous pourront toujours récupérer des données de toutes sortes provenant du monde entier. Cela signifie également que nous n'aurons pas besoin de passer par des intermédiaires privés (donc payant) pour télécharger des données sur le web. Il suffit d'utiliser son navigateur habituel et il n'y a pas besoin d'apprendre des protocoles différents pour chaque types de données (des images, des sons ou du texte se collectent de la même façon) ou pour chaque zones géographiques (on se connecte à un serveur américain avec les mêmes protocoles HTTP qu'a un serveur français) ou pour chaque langues (on accède à une page web en chinois de la même façon qu'a une page web en français).
L'interfonctionnement du web signifie également que les données téléchargées seront standardisées, réduisant grandement le travail humain d'interprétation. Ces données pourrons plus facilement être analysées et comparées.

L'accès à la connaissance et au monde de la recherche est également un question centrale dans le domaine de la data science. Les technologie, les pratiques, les outils sont en constante évolution et il est nécessaire d’effectuer un travail d'auto formation permanent pour ne pas se retrouver dépassé. L’interopérabilité du web garantit que nous pourrons avoir au moins en partie cet accès à la connaissance depuis chez nous et gratuitement.

## Conclusion : L'interopérabilité du web dans ma carrière professionnelle 
En ce qui concerne ma carrière personnelle, j’espère pouvoir travailler dans le domaine de la géomatique. Du fait de la multitude et de la complexité des formats, les données géographiques ont pendant longtemps été non-interopérables. Sur le web, les différents sites ont souvent leurs propres formats et leurs propres structures pour gérer ces données.

Pour lutter contre les difficultés que cela entraîne dans le partage des données, des projets de normalisation se développent, notamment sous l'impulsion du Open Geospatial Consortium (OGC) qui regroupe plus de 200 acteurs publics et privés.
Par exemple, l’OGC a publié la spécification des « Simple Features » qui donne la description des entités élémentaires (points, lignes et polygones, datum, système de projection, système de coordonnées) à utiliser pour représenter l’information géographique.

Grace au travail d'OGC et bien d'autres, de grandes perspectives s'offrent à la géomatique. Déjà aujourd'hui, des initiatives commencent à voir le jour pour ouvrir des catalogues de données ouverts au grand public et pouvant être consultés sur le Web. Si c'est catalogues enregistraient des données conformes aux normes OGC, un utilisateur aurais la possibilité de télécharger et de croiser des données hétérogènes, distantes et distribuées.

En tant que géomaticien j'aurais alors à disposition une quantité potentiellement infinie de données (donc de matière première) en accès simple, rapide et gratuit.
