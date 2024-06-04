<template>
  <base-section
    id="info-alt"
    space="56"
  >
    <v-container>
      <v-row justify="space-between">
        <v-col
          cols="12"
          md="5"
        >
          <base-business-info
            :title="$t('contact-section.business-info.title')"
            :content="$t('contact-section.business-info.content')"
            :business="[
              {
                icon: 'mdi-map-marker-outline',
                title: 'Address',
                text: 'Av. Insurgentes Sur #64, Col. Juarez, CDMX',
              },
              {
                icon: 'mdi-cellphone',
                title: 'Phone',
                text: '+52 (55) 5254 7000',
              },
              {
                icon: 'mdi-email',
                title: 'Email',
                text: 'contacto@acerho.com',
              },
            ]"
          >
          </base-business-info>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <base-contact-form
            :title="$t('contact-section.base-contact-form.title')"
            href="mailto:contacto@acerho.com?subject=Contacto"
          />
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {}
</script>
