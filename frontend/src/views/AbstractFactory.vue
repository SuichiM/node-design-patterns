<template>
<v-container>
    <h1>Abstract Factory</h1>

     {{content}}

    <v-expansion-panels flat hover popout>
        
        <v-expansion-panel v-for="(item, key) in examples" :key="key" >

            <v-expansion-panel-header><h5>{{item.title}}</h5></v-expansion-panel-header>

            <v-expansion-panel-content>         
                <v-img :src="item.image" max-height="320" contain alt="Abstract Factory Diagram"/>
                <component :is="item.component"/>
            </v-expansion-panel-content>

        </v-expansion-panel>

  </v-expansion-panels>
</v-container>
</template>
<script>

import Generic from '@/components/AbstractFactory/Generic';
import Specific from '@/components/AbstractFactory/Specific';
export default{
    props:{

    },
    data(){
        return{
            content: 'Abstract Factory is a creational design pattern that lets you produce families of related objects without specifying their concrete classes.',    
            examples:{
                generic: {
                    title: 'Generic',
                    image: 'https://refactoring.guru/images/patterns/diagrams/abstract-factory/structure.png',
                    component: Generic
                },
                custom: {
                    title: 'Specific',
                    image: 'https://refactoring.guru/images/patterns/diagrams/abstract-factory/example.png',
                    component: Specific
                }
            }
        }
    }

}
</script>