// Función para obtener idiomas (usando datos mockeados)
export const getLanguages = async () => {
  return [
    { tag: 'en-gb', name: 'English (United Kingdom)' },
    { tag: 'en-es', name: 'Spanish (Spain)' },
    { tag: 'pt-pt', name: 'Portuguese (Portugal)' },
  ];
};

let mockDictionaries = [
  {
    "id": 1,
    "texts": [
      {
        "id": 1,
        "language": "en-gb",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        "id": 2,
        "language": "en-es",
        "text": ""
      },
      {
        "id": 3,
        "language": "pt-pt",
        "text": ""
      }
    ]
  },
  {
    "id": 2,
    "texts": [
      {
        "id": 4,
        "language": "en-gb",
        "text": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        "id": 5,
        "language": "en-es",
        "text": "Edam fromage lancashire feta caerphilly everyone loves chalk and cheese brie. Red leicester parmesan cheese and biscuits cheesy feet blue castello cheesecake fromage frais smelly cheese."
      },
      {
        "id": 6,
        "language": "pt-pt",
        "text": ""
      }
    ]
  },
  {
    "id": 3,
    "texts": [
      {
        "id": 7,
        "language": "en-gb",
        "text": "Edam fromage lancashire feta caerphilly everyone loves chalk and cheese brie. Red leicester parmesan cheese and biscuits cheesy feet blue castello cheesecake fromage frais smelly cheese."
      },
      {
        "id": 8,
        "language": "en-es",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        "id": 9,
        "language": "pt-pt",
        "text": ""
      }
    ]
  },
  {
    "id": 4,
    "texts": [
      {
        "id": 10,
        "language": "en-gb",
        "text": "Edam fromage lancashire feta caerphilly everyone loves chalk and cheese brie. Red leicester parmesan cheese and biscuits cheesy feet blue castello cheesecake fromage frais smelly cheese."
      },
      {
        "id": 11,
        "language": "en-es",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        "id": 12,
        "language": "pt-pt",
        "text": ""
      }
    ]
  },
  {
    "id": 5,
    "texts": [
      {
        "id": 13,
        "language": "en-gb",
        "text": "Webtwo ipsum orkut reddit meebo skype vimeo jajah spock empressr zimbra, mobly napster hipmunk prezi chartly bitly spock. "
      },
      {
        "id": 14,
        "language": "en-es",
        "text": "A business big enough that it could be listed on the NASDAQ goes belly up."
      },
      {
        "id": 15,
        "language": "pt-pt",
        "text": ""
      }
    ]
  },
  {
    "id": 6,
    "texts": [
      {
        "id": 16,
        "language": "en-gb",
        "text": "A slice of heaven. O for awesome, this chocka full cuzzie is as rip-off as a cracker. Meanwhile, in behind the bicycle shed, Hercules Morse, as big as a horse and Mrs Falani were up to no good with a bunch of crook pikelets."
      },
      {
        "id": 17,
        "language": "en-es",
        "text": ""
      },
      {
        "id": 18,
        "language": "pt-pt",
        "text": ""
      }
    ]
  },
  {
    "id": 7,
    "texts": [
      {
        "id": 19,
        "language": "en-gb",
        "text": "A slice of heaven. O for awesome, this chocka full cuzzie is as rip-off as a cracker. Meanwhile, in behind the bicycle shed, Hercules Morse, as big as a horse and Mrs Falani were up to no good with a bunch of crook pikelets."
      },
      {
        "id": 20,
        "language": "en-es",
        "text": "Cheese on toast airedale the big cheese. Danish fontina cheesy grin airedale danish fontina taleggio the big cheese macaroni cheese port-salut."
      },
      {
        "id": 21,
        "language": "pt-pt",
        "text": ""
      }
    ]
  },
  {
    "id": 8,
    "texts": [
      {
        "id": 22,
        "language": "en-gb",
        "text": "Lorem"
      },
      {
        "id": 23,
        "language": "en-es",
        "text": "Lorem"
      },
      {
        "id": 24,
        "language": "pt-pt",
        "text": ""
      }
    ]
  }
];

export const getDictionaries = async () => {
  return new Promise((resolve) => {
    resolve(mockDictionaries);
  });
};

export const updateDictionaries = async (dictionaries) => {
  mockDictionaries = dictionaries;
  return true;
};