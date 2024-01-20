We want to do a small PoC of a translation memory editor ([1](https://www.languagewire.com/en/technology/translation-memory)) ([2](https://en.wikipedia.org/wiki/Translation_memory)). In this app we can see and modify pairs of previously translated paragraphs.

You have at your disposal:

1. `api-spec.yaml`: OpenApi spec with the expected API contract for you to mock responses and http behaviour. You can use [open api editor](https://editor.swagger.io/) with our spec to see how it looks.
2. `mock-data.json`: a json file with some mock data to ease your work. You're free to break it down in different files or to not use it at all and build your own mock data set.

**Tech stack**
We use typescript and care about static checks and readability; using typescript is our only requirement tech-wise. We use Vue, but you can write this task with your preferred framework flavour, or no framework at all.

**App description**
We want to see and update translated pairs retrieved from a translation memory system. These pairs consist of two languages, a _source_ and a _target_.

- _Source language_ is the language of the original text. This is read-only data.
- _Target language_ is the language of the translated text (the one the translator wrote). This is the data that the user will want to bulk edit.

The app will contain a single page, the editor itself. It needs to adhere to this wireframe:
![ui-draft.png](ui-draft.png).

**Requirements**

1. Land directly to the editor and have to our disposal three different languages to select from, `es-ES`, `en-GB` and `pt-PT` that are provided by the backend.
2. We can inspect translated pairs.
   1. We only have results for the `es-ES` (source)-> `en-GB` (target) combination.
   2. Any other combination will simply return empty results from the backend.
3. We can bulk update pairs in the target language.
