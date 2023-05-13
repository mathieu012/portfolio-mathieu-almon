import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  private breakpointObserver = inject(BreakpointObserver);

  experiences: Experience[] =[

    {
      poste: "Concepteur/Developpeur",
      client: "iMSA",
      periode: "1/10/2022 à aujourd'hui",
      projet: "Logiciel Retraite",
      description: `Actuellement, je contribue au developpement d'un logiciel retraite en réalisant l'intégration de services SOAP, la création de service spring java ainsi que
      la création d'interfaces utilisateur. Ces travaux me permette d'acquérir une expertise dans le domaine de la conception et du développement de logiciels, ainsi qu'une compréhension des enjeux liés aux systèmes de retraite.`,
    },
    {
      poste: "Analyste Programeur",
      client: "iMSA",
      periode: "2 ans",
      projet: "Nouvelle Diffusion, Ice-T",
      description: `En tant que Analyste Programmeur, j'ai contribué à des travaux visant à mettre en place une nouvelle méthode de diffusion pour les développeurs de l'iMSA. L'objectif principal de cette initiative est de fournir une solution permettant le déploiement d'applications métier au sein d'environnements diversifiés à des fins de qualification,
      de recettage et de production. Parallèlement à ces travaux, nous avons également entrepris la conception d'une application baptisée Ice-T. Cette application offre un service d'édition de données aux développeurs ainsi qu'aux agents caisse de la MSA. L'objectif de cette application est d'améliorer l'efficacité et l'exploitabilité du système d'information.`},
    {
      poste: " Assistant responsable de SI",
      client: "Compobaie Solutions",
      periode: "1 ans",
      projet: "Maintenance et évolution du SI de l’entreprise",
      description: `Pendant mon parcours professionnel, j'ai réalisée la maintenance et l'évolution du système d'information. De plus, j'ai développé des documents Excel en VBA/SQL afin de permettre l'ajout de fonctionnalités supplémentaires aux utilisateurs, facilitant ainsi leur travail quotidien et améliorant leur productivité.`
    }
    ]


  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.HandsetPortrait).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Expérience', cols: 3, rows: 15 },
          { title: 'Cursus Scolaire', cols: 3, rows: 3},
          { title: 'Loisir', cols: 3, rows:3},
        ];
      }

      return [
        { title: 'Expérience', cols: 2, rows: 8},
        { title: 'Cursus Scolaire', cols: 1, rows: 3},
        { title: 'Loisir', cols: 1, rows: 3},
      ];
    })
  );
}

export class Experience {

  poste!: string
  client!: string
  periode!: string
  projet!: string
  description!: string

}

export class Loisir {

  icon!: string
  text!: string

}
const loisirs: Loisir[] = [

{
  icon: "plane",
  text: `Voyage`
}
]



