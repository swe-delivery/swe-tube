# SWE Tube

## User story

**Visitors** are anonymous. When we add auth later, we can allow them to create a user account which persists their profile in the `User` table

 - As a visitors, I can see a list of all previously shared **resources**
 - As a visitor, I can filter the list by **tags**
 - As a visitor, I can mark a resource as **liked**
 - As a visitor, I can mark a resource as **completed**
 - As a visitor, I can order the filtered list by _number of likes_ or _time posted_
 - As a visitor, I can create a **playlist** and add resources to it

## ERD

```mermaid
erDiagram
    VISITOR {
        string id PK
    }
    RESOURCE {
        string id PK
        string sharerId FK
    }
    TAG {
        string id  PK
        string title
        string colour
    }
    PLAYLIST {
        string id PK
        string ownerId FK
        string title
    }
    VISITOR ||--o{ RESOURCE: shares
    VISITOR }o--o{ RESOURCE: likes
    VISITOR ||--o{ PLAYLIST: owns
    PLAYLIST }o--o{ RESOURCE: contains
    RESOURCE }o--o{ TAG: has
```
