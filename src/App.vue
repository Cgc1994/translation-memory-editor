<template>
  <div v-if="loaded">
    <TableComponent
      :languages="languages"
      :dictionaries="dictionaries"
      @update-text="handleTextUpdate"
      @update-data="handleUpdateData"
    />
  </div>
</template>

<script>
import TableComponent from './components/TableComponent.vue';
import { getLanguages, getDictionaries, updateDictionaries } from '../apiService';

export default {
  name: 'App',
  components: {
    TableComponent
  },
  data() {
    return {
      languages: [],
      dictionaries: [],
      loaded: false,
    };
  },
  async mounted() {
    try {
      await Promise.all([
        this.getLanguages(),
        this.getDictionaries()
      ]);
      this.loaded = true;
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    async getLanguages () {
      fetch('https://editor.swagger.io/languages')
        .then(response => {
          if (!response.ok) {
            throw new Error(`Error de red: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          this.languages = JSON.parse(data);
        })
        .catch(async error => {
          console.error('Error en la solicitud Fetch:', error);
          this.languages = await getLanguages();
        });
    },
    async getDictionaries () {
      fetch('https://editor.swagger.io/translation-memories/es/en')
        .then(response => {
          if (!response.ok) {
            throw new Error(`Error de red: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          this.dictionaries = JSON.parse(data);
        })
        .catch(async error => {
          console.error('Error en la solicitud Fetch:', error);
          this.dictionaries = await getDictionaries();
        });
    },
    handleTextUpdate({ itemId, newText, targetLanguage }) {
      const itemIndex = this.dictionaries.findIndex(item => item.id === itemId);
      if (itemIndex !== -1) {
        const textIndex = this.dictionaries[itemIndex].texts.findIndex(text => text.language === targetLanguage);
        if (textIndex !== -1) {
          this.dictionaries[itemIndex].texts[textIndex].text = newText;
        }
      }
    },
    async setNewDictionaries(dictionaries) {
      const putOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dictionaries),
      };

      fetch('https://editor.swagger.io/translation-memories', putOptions)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Error de red: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          console.log('Solicitud PUT exitosa:', data);
        })
        .catch(error => {
          console.error('Error en la solicitud Fetch:', error);
        });
    },
    async handleUpdateData() {
      try {
        updateDictionaries(this.dictionaries);
        await this.setNewDictionaries(this.dictionaries);
        alert('Data updated successfully');
      } catch (error) {
        alert('Error updating data:', error);
      }
    }
  }
};
</script>

<style>
</style>
