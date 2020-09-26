<template>
    <div class="header">
        <div class="header-list">
          <div class="container">
              <div class="row">
                <ul class="header-list-link">
                    <li><a href="#">{{$t('Catalog')}}</a></li>
                    <li><a href="#">{{$t('About us')}}</a></li>
                    <li><a href="#">{{$t('Payment and delivery')}}</a></li>
                    <li><a href="#">{{$t('Exchange and return')}}</a></li>
                    <li><a href="#">{{$t('Contacts')}}</a></li>
                </ul>

              </div>
          </div>
        </div>
        <div class="bottom-header">
            <div class="container">
                <div class="row">
                    <span>WebElectrotechicShop</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style lang="scss" scoped>
    .header-list {
        background: #000000;
        .header-list-link {
            list-style: none;
            display: flex;
            margin: 0;
            padding: 0;
            li {
                font-size: 12px;
                padding: 10px 15px 10px 0;
                a {
                    color: #ffffff;
                    text-decoration: none;
                }
            }
        }
    }
    .bottom-header{
        background: #ffcc12;
    }
</style>