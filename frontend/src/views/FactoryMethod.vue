<template>
<v-container>
    <h1>Factory Method</h1>

     {{content}}

    <v-expansion-panels flat hover popout>
        
        <v-expansion-panel v-for="(item, key) in examples" :key="key" >

            <v-expansion-panel-header><h5>{{item.title}}</h5></v-expansion-panel-header>

            <v-expansion-panel-content>         
                <v-img :src="item.image" max-height="320" contain alt="Factory Method Diagram"/>
                <component :is="item.component"/>
            </v-expansion-panel-content>

        </v-expansion-panel>

  </v-expansion-panels>
</v-container>
</template>
<script>

import Generic from '@/components/FactoryMethods/Generic';
import Specific from '@/components/FactoryMethods/Specific';
export default{
    props:{

    },
    data(){
        return{
            content: 'Factory Method is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.',    
            examples:{
                generic: {
                    title: 'Generic',
                    image: 'https://refactoring.guru/images/patterns/diagrams/factory-method/structure.png',
                    component: Generic
                },
                custom: {
                    title: 'Specific',
                    image: 'https://refactoring.guru/images/patterns/diagrams/factory-method/example.png',
                    component: Specific
                }
            }
        }
    }

}
</script>