<template>
  <base-section
    id="affiliates"
    space="100"
  >
  <v-responsive
      class="mx-auto"
      max-width="1350"
    >
      <!-- <base-section-heading title="Partners" /> -->

      <v-row>
        <v-col md="3"  v-for="(i, index) in images" :key="index">
          <v-card flat>
            <v-card-text>
              <v-img height="50px" contain class="text-center" :src="i.img"></v-img>
            </v-card-text>

            <v-list>
              <v-list-item dense>
                <v-list-item-action>
                  <v-icon color="primary">mdi-map</v-icon>
                </v-list-item-action>

                <v-list-item-title>
                  {{ i.address }}
                </v-list-item-title>
              </v-list-item>

              <v-list-item dense>
                <v-list-item-action>
                  <v-icon color="primary">mdi-phone</v-icon>
                </v-list-item-action>

                <v-list-item-title>
                  {{ i.phone }}
                </v-list-item-title>
              </v-list-item>

              <v-list-item dense>
                <v-list-item-action>
                  <v-icon color="primary">mdi-web</v-icon>
                </v-list-item-action>

                <v-list-item-title>
                  <a :href="i.href">{{ i.href }}</a>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
      <!-- <v-slide-group>
        <template v-for="(i, index) in images">
          <v-slide-item
            :key="index"
            class="align-self-center"
          >
            <base-img
              :src="i"
              color="grey"
              contain
              height="100"

            />
          </v-slide-item>

          <v-responsive
            v-if="index < (images.length -1)"
            :key="`divider-${index}`"
            class="text-center"
            height="56"
          >
            <v-divider vertical />
          </v-responsive>
        </template>
      </v-slide-group> -->
    </v-responsive>

  </base-section>
</template>

<script>
  export default {
    name: 'SectionAffiliates',
    data: () => {
      return {
        images: [
          {
            title: 'Price Water House Coopers',
            address: 'Mariano Escobedo 573 Col. Rincon del Bosque',
            phone: '(55) 5080 6000',
            href: 'https://www.pwc.com',
            img: '/img/partners/pwc2.png'
          },
          {
            title: 'Deloitte',
            address: 'Paseo de la Reforma 505, piso 28 Col. Cuauhtémoc',
            phone: '+52 (55) 5263 6000',
            href: 'https://www2.deloitte.com/mx/es.html',
            img: '/img/partners/deloitte2.png'
          },
          {
            title: 'Stefanini',
            address: 'Av. Caseros 3039, Parque Patricios, Piso 7, Edificio Tesla II Ciudad Autónoma de Buenos Aires, C.P.: 1437 Argentina',
            phone: '(5411) 6841-6161',
            href: 'https://stefanini.com/es',
            img: '/img/partners/stefanini.png'
          },
          {
            title: 'SAP',
            address: 'Prolongacion Paseo de la Reforma 600, Santa Fe, Zedec Sta Fé, Álvaro Obregón, 01210 Ciudad de México, CDMX',
            phone: '01 800 849 2970',
            href: 'https://www.sap.com/latinamerica/index.html?url_id=auto_hp_redirect_latinamerica',
            img: '/img/partners/sap.png'
          },
          {
            title: 'Oracle',
            address: 'Montes Urales 470 PB Col. Lomas de Chapultepec',
            phone: '+52 (55) 9178 3000',
            href: 'https://www.oracle.com',
            img: '/img/partners/oracle2.png'
          },
          {
            title: 'Prosa',
            address: 'México, D.F',
            phone: '+52 (55) 5268 1212',
            href: 'https://www.prosamexico.mx',
            img: '/img/partners/prosa2.png'
          },
          {
            title: 'Unicomm',
            address: 'Bochil 390, Col. Torres de padierna, Tlalpan, C.P.14200, CDMX',
            phone: '+52 (55) 9117-0830',
            href: 'https://unicomm.mx',
            img: '/img/partners/unicomm.png'
          },
          {
            title: 'Ideasoft',
            address: 'Uruguay Montevideo Echevarriarza 3358',
            phone: '598 (2) 628 0251',
            href: 'https://www.ideasoft.biz',
            img: '/img/partners/Ideasoft2.png'
          },
          {
            title: 'Apia',
            address: 'Br. Artigas 434 C.P. 11300 Uruguay, Montevideo',
            phone: '+59 (82) 712 5976',
            href: 'https://www.statum.biz/statum',
            img: '/img/partners/apia.png'
          },
          {
            title: 'Especialistas en Fondos de Previsión Social',
            address: 'Paseo de la Reforma 505, piso 28 Col. Cuauhtémoc',
            phone: '978 208 4770',
            href: 'http://www.efp.com.mx/',
            img: '/img/partners/efp.png'
          },
        ]
      }
    }
  }
</script>
