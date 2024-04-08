<template>
    <v-container fluid>
       <v-card>
        <v-row flex>
            <v-col cols="12" sm="12" md="12" lg="12" xl="12">
                <v-card-text>
                    Page Not Found
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" @click="$router.go(-1)">Back</v-btn>
                </v-card-actions>
            </v-col>
        </v-row>
       </v-card>
    </v-container>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>