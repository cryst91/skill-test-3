<template>
  <div class="d-flex justify-content-center vh-100">
    <div class="d-flex align-items-center vw-100">
      <div class="p-3 card w-100">
        <div class="overflow-y" style="height: 70vh;">
          <div class="container">
            <div class="text-center">
              <div class="text-center"><h1 class="mb-5">SKILL TEST 3</h1></div>
              <div class="row">
                <div class="col-md-4">
                  <ItemList listname="PROGRAMMER"/>
                </div>
                <div class="col-md-3 text-center">
                  <br><br>
                  <ButtonPindah />
                </div>
                <div class="col-md-4">
                  <ItemList listname="ANALYST"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
