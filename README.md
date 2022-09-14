# api-template-pi

## installation guide

1. copie o seguiente comando no terminal

```
git clone git@github.com:lucas-sk/api-template-pi.git
```

2. Entre na pasta api-template-pi

```
cd api-template-pi
```

3. instalar as dependencias

```
npm i
```

Obs: existe algumas dependencias que é necessario instalar extensões no vscode como prettier, eslint e o editorconfig

End Points

```
  GET     /users                -> mostrar todos os usúarios
  GET     /users/uuid           -> mostrar o usuario baseado uuid
  GET     /users/uuid/pets      -> mostrar os pets cadastrado no usuario
  GET     /users/uuid/pets/uuid   -> mostrar o pets baseado uuid do pet cadastrado no usuario
  POST    /users                -> criar novo usuario
  POST    /users/uuid/pets      -> cria ou add novo pet ao usuario
  PUT     /users/uuid           -> faz alterações no usuario baseado no uuid dele
  PUT     /users/uuid/pets/uuid   -> faz alterações no pet baseado no uuid dele
  DELETE  /users/uuid           -> deleta usuario baseado no uuid dele
  DELETE  /users/uuid/pets/uuid   -> deleta o pet baseado no uuid dele
```

```
  GET     /users                -> mostrar todos os usúarios
  GET     /users/uuid           -> mostrar o usuario baseado uuid
  GET     /users/uuid/pets      -> mostrar os pets cadastrado no usuario
  GET     /users/uuid/pets/   -> mostrar o pets baseado uuid do pet cadastrado no usuario
  GET     /pets/uuid   -> mostrar o pets baseado
  POST    /users                -> criar novo usuario
  POST    /pet                  -> criar novo pet
  POST    /users/uuid/pets      -> cria ou add novo pet ao usuario
  PUT     /users/uuid           -> faz alterações no usuario baseado no uuid dele
  PUT     /pets/uuid   -> faz alterações no pet baseado no uuid dele
  DELETE  /users/uuid           -> deleta usuario baseado no uuid dele
  DELETE  /users/uuid/pets/uuid   -> deleta o pet baseado no uuid dele
```
