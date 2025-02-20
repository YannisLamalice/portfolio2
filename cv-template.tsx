import React from 'react';
import { Mail, Phone, MapPin, Car } from 'lucide-react';

const CV = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg">
      {/* En-tête */}
      <header className="border-b-2 border-gray-300 pb-4 mb-6">
        <h1 className="text-4xl font-bold text-gray-800">Yannis THOMAS</h1>
        <h2 className="text-2xl text-blue-600 mt-2">Développeur Backend Junior</h2>
        <div className="flex flex-wrap gap-4 mt-4 text-gray-600">
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>yannis.thomas22@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>07 62 35 88 39</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>Rennes, France</span>
          </div>
          <div className="flex items-center gap-2">
            <Car size={16} />
            <span>Permis B</span>
          </div>
        </div>
      </header>

      {/* Formation */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-200">Formation</h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between">
              <h4 className="font-semibold">BTS SIO option SLAM</h4>
              <span className="text-gray-600">2023 - présent</span>
            </div>
            <p className="text-gray-600">AFTEC Rennes</p>
            <ul className="list-disc ml-5 mt-2">
              <li>Spécialisation en développement d'applications</li>
              <li>Stage développeur IA : SmartMoov Solutions - Création dataset et IA pour panneaux routiers</li>
              <li>Stage administration BDD : CGRé Rennes</li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between">
              <h4 className="font-semibold">Licence LLCER Anglais</h4>
              <span className="text-gray-600">2019 - 2021</span>
            </div>
            <p className="text-gray-600">Université Rennes 2</p>
            <ul className="list-disc ml-5 mt-2">
              <li>Deux années validées</li>
              <li>Certification TOEIC</li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between">
              <h4 className="font-semibold">Licence Mathématiques</h4>
              <span className="text-gray-600">2018 - 2019</span>
            </div>
            <p className="text-gray-600">Université Rennes 1</p>
          </div>

          <div>
            <div className="flex justify-between">
              <h4 className="font-semibold">Baccalauréat STI2D</h4>
              <span className="text-gray-600">2018</span>
            </div>
            <p className="text-gray-600">Lycée Chaptal, Saint-Brieuc</p>
          </div>
        </div>
      </section>

      {/* Expérience Professionnelle */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-200">Expérience Professionnelle</h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between">
              <h4 className="font-semibold">Développeur IA - Stage</h4>
              <span className="text-gray-600">2024</span>
            </div>
            <p className="text-gray-600">SmartMoov Solutions, Rennes</p>
            <ul className="list-disc ml-5 mt-2">
              <li>Conception et développement d'un système de détection de panneaux</li>
              <li>Création et gestion de dataset pour l'entraînement d'IA</li>
              <li>Implémentation d'algorithmes de classification</li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between">
              <h4 className="font-semibold">Administrateur Base de Données - Stage</h4>
              <span className="text-gray-600">2024</span>
            </div>
            <p className="text-gray-600">CGRé, Rennes</p>
            <ul className="list-disc ml-5 mt-2">
              <li>Administration et optimisation de bases de données</li>
              <li>Mise en place de procédures de maintenance</li>
              <li>Gestion de la sécurité des données</li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between">
              <h4 className="font-semibold">Chef de Partie Chaud</h4>
              <span className="text-gray-600">2022</span>
            </div>
            <p className="text-gray-600">Mama Vespa, Rennes</p>
            <ul className="list-disc ml-5 mt-2">
              <li>Gestion d'équipe et organisation de la production</li>
              <li>Respect des normes HACCP</li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between">
              <h4 className="font-semibold">Second de Cuisine / Commis / Plongeur</h4>
              <span className="text-gray-600">2018-2021</span>
            </div>
            <p className="text-gray-600">Brasserie Breizh Izel, Pléneuf-Val-André</p>
            <ul className="list-disc ml-5 mt-2">
              <li>Évolution progressive des responsabilités</li>
              <li>Travail en équipe et gestion du stress</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Compétences */}
      <section>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-200">Compétences</h3>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2">Développement</h4>
            <ul className="list-disc ml-5">
              <li>Langages de programmation backend</li>
              <li>Bases de données SQL et NoSQL</li>
              <li>Notions de développement frontend</li>
              <li>Méthodologies Agile</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Intelligence Artificielle</h4>
            <ul className="list-disc ml-5">
              <li>Création et gestion de datasets</li>
              <li>Entraînement de modèles de détection</li>
              <li>Classification d'images</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Certifications</h4>
            <ul className="list-disc ml-5">
              <li>Certification CISCO</li>
              <li>TOEIC Anglais</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Soft Skills</h4>
            <ul className="list-disc ml-5">
              <li>Travail en équipe</li>
              <li>Gestion du stress</li>
              <li>Capacité d'adaptation</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CV;