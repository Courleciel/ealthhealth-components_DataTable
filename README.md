
# @courleciel/datatable

`@courleciel/datatable` est un composant React conçu pour afficher des tableaux avec des fonctionnalités avancées telles que la pagination, le tri et la recherche.

---

## 📦 Installation

Installez le composant via npm :

```bash
npm install @courleciel/datatable
```

---

## 🚀 Utilisation

Après l'installation, importez et utilisez le composant dans votre projet :

```javascript
import DataTable from 'wealthhealth-components-datatable-courleciel';

// Exemple d'utilisation
const data = [
  { name: 'John Doe', age: 28, position: 'Developer' },
  { name: 'Jane Smith', age: 34, position: 'Manager' },
  // ... autres données
];

const columns = [
  { title: 'Nom', field: 'name' },
  { title: 'Âge', field: 'age' },
  { title: 'Poste', field: 'position' },
  // ... autres colonnes
];

function App() {
  return (
    <DataTable
      data={data}
      columns={columns}
      title="Liste des employés"
    />
  );
}

export default App;
```

Dans cet exemple, `data` représente les données à afficher, et `columns` définit les colonnes du tableau.

---

## ⚙️ Propriétés

Le composant `DataTable` accepte les propriétés suivantes :

| Propriété | Type   | Description                                                                 |
|-----------|--------|-----------------------------------------------------------------------------|
| `data`    | array  | **Obligatoire**. Tableau d'objets contenant les données à afficher.         |
| `columns` | array  | **Obligatoire**. Tableau d'objets définissant les colonnes du tableau.      |
| `title`   | string | Titre affiché au-dessus du tableau.                                         |
| `options` | object | Options supplémentaires pour personnaliser le comportement du tableau.      |

---

## 🎨 Personnalisation

Vous pouvez personnaliser l'apparence et le comportement du tableau en utilisant la propriété `options` :

```javascript
const options = {
  paging: true,        // Activer la pagination
  pageSize: 10,        // Nombre de lignes par page
  sorting: true,       // Activer le tri
  search: true,        // Activer la recherche
};
```

---

## 🌟 Fonctionnalités

- **Pagination** : Naviguez entre les pages facilement.
- **Recherche intégrée** : Recherchez rapidement dans vos données.
- **Tri des colonnes** : Triez les données en cliquant sur les en-têtes des colonnes.
- **Personnalisation facile** : Ajustez les options et l'apparence en fonction de vos besoins.

---

## 🔗 Liens

- **[Dépôt GitHub](https://github.com/Courleciel/wealthhealth-components_DataTable)**
- **[Package NPM](https://www.npmjs.com/package/@courleciel/datatable)**

---

N'hésitez pas à contribuer, soumettre des problèmes ou proposer des améliorations !
