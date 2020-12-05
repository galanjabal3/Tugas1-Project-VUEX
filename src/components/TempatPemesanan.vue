<template>
    <div class="col-md-6">
        <div class="card bg-transparent text-white font-weight-bold">
            <div class="card-header">
                <h3 class="card-title font-weight-bold">Kasir Pemesanan</h3>
            </div>
            <div class="card-body">
                <div class="form-group text-left">
                    <label for="">Nomor Meja:</label>
                    <input type="text" v-model="menu.meja" class="form-control" required>
                </div>
                <div class="form-group text-left">
                    <label for="">Makanan:</label>
                    <input type="text" v-model="menu.makanan" class="form-control" required>
                </div>
                <div class="form-group text-left">
                    <label for="">Minuman:</label>
                    <input type="text" v-model="menu.minuman" class="form-control" required>
                </div>
                <div class="form-group">
                    <button class="btn btn-primary btn-lg btn-block" :disabled="isLoading"  @click.prevent="simpan">{{ isLoading ? 'Loading...':'Pesan' }}</button>
                </div>                                
            </div>
        </div>
    </div>        
</template>

<script>
    export default {
        name: 'TempatPemesanan',
        data() {
            return {
                menu: {
                    meja: '',
                    makanan: '',
                    minuman: ''
                }
            }
        },
        methods: {
            simpan() {
                this.$store.dispatch('simpanMenu', this.menu)
                this.menu = {
                    meja: '',
                    makanan: '',
                    minuman: ''
                }
            }
        },
        computed: {
            isLoading() {
                return this.$store.state.isLoading
            }
        }
    }
</script>