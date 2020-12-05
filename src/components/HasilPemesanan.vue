<template>
    <div class="col-md-6">
        <div class="card bg-transparent text-white font-weight-bold">
            <div class="card-header">
                <h3 class="card-title font-weight-bold">Hasil Pemesanan</h3>
            </div>
            <div class="card-body ">
                <div class="table-responsive">
                    <table class="table table-hover table-bordered text-white font-weight-bold">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nomor Meja</th>
                                <th>Makanan</th>
                                <th>Minuman</th>
                            </tr>
                        </thead>    
                        <tbody>
                            <tr v-for="(row, index) in menu" :key="index">
                                <td>{{ index+1 }}</td>
                                <td>{{ row.meja }}</td>
                                <td>{{ row.makanan }}</td>
                                <td>{{ row.minuman }}</td>
                            </tr>
                        </tbody>                
                    </table>                        
                </div>
            </div>
        </div>
    </div>        
</template>

<script>
    export default {
        name: 'HasilPemesanan',
        computed: {
            menu() {
                return this.$store.state.listMenu
            }
        }
    }
</script>