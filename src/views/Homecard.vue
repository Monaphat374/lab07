<template>
    <body>
        <div class="container">

            <div class="card" style="width: 35rem;">
                <img src="src\assets\bang_kwang.jpeg" class="card-img-top" alt="Bangkwang Cafe Image">
                <div class="card-body">
                    <h5 class="card-title">Bangkwang ca'fe</h5>
                    <p class="card-text">ร้านตกแต่งจำลองร้านเป็นคุกบางขวาง บรรยากาศดี ชิลล์ๆ ดนตรีสดเล่นเพราะ
                        มีโซนด้านนอกด้านใน แบบ open air เหมาะกับการไปดื่มไปนั่งชิวเป็นกลุ่มกับเพื่อน</p>
                    <p>เวลาเปิด-ปิด : 17:00 – 0:00 น.</p>
                    <p>พิกัด : ถ.เลียบคลองชลประทาน สุเทพ</p>
                    <button type="button" class="btn btn-info" @click="redirectToCardout(1)">จอง</button>
                </div>
            </div>

            <div class="card" style="width: 35rem;">
                <img src="src\assets\Beer-Lab.png" class="card-img-top" alt="Beer Lab">
                <div class="card-body">
                    <h5 class="card-title">Beer Lab</h5>
                    <p class="card-text">ที่นี่มีเบียร์ให้เลือกดื่มเยอะมาก ๆ ไม่ว่าจะเป็นเบียร์ Craft หรือ Cocktail
                        ก็มีให้เลือกดื่ม บอกไว้ก่อนเลยว่าเบียร์ที่นี่แก้วใหญ่มาก ดื่มแก้วเดียวอยู่ได้ทั้งคืน บรรยากาศดี
                        มีอาหารเสิร์ฟตลอดทั้งคืน</p>
                    <p>เวลาเปิด-ปิด : 17:00 – 00:00 น.</p>
                    <p>พิกัด : ใกล้ๆกับปากซอยนิมมาน 12</p>
                    <button type="button" class="btn btn-info" @click="redirectToCardout(2)">จอง</button>
                </div>
            </div>

            <div class="card" style="width: 35rem;">
                <img src="src\assets\Warmupcafe-01-1536x1025.jpeg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Warm up cafe</h5>
                    <p class="card-text">เป็นร้านใหญ่ของเชียงใหม่ มีทั้งโซนผับ โซนดนตรีสด และยังมีโซนให้นั่งทางอาหาร</p>
                    <p>เวลาเปิด-ปิด : 18:00 – 00:00 น.</p>
                    <p>พิกัด : ถนนนิมมานเหมินท์</p>
                    <button type="button" class="btn btn-info" @click="redirectToCardout(3)">จอง</button>
                </div>
            </div>

            <div class="card" style="width: 35rem;">
                <img src="src\assets\Hom_bar.jpeg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Hom Bar Chiang Mai</h5>
                    <p class="card-text">ร้านนี้มีดนตรีสดให้ฟังยันเที่ยงคืน มีบัคเก็ตที่ต้องบอกเลยว่า “กิ๋นง่าย เมาง่าว”
                        มีพื้นที่กว้างขวางที่สามารถเต้นได้แบบไม่ต้องเกรงใจโต๊ะข้าง ๆ</p>
                    <p>เวลาเปิด-ปิด : 17:00 – 0:00 น.</p>
                    <p>พิกัด : ตลาดคำเที่ยง</p>
                    <button type="button" class="btn btn-info" @click="redirectToCardout(4)">จอง</button>
                </div>
            </div>
        </div>
    </body>
</template>

<script>
export default {
  methods: {
    redirectToCardout(cardId) {

      this.$router.push({ name: 'Cardout', params:{ cardId } });
    },
  },
};
</script>

<style scoped>
body {
    background-color: #37474f /* เปลี่ยนสีพื้นหลังที่นี่ */
  }

.container{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px; 
  margin-top: 50px;
  transform: translateX(70px);
}
.card {
  width: 50%;
  height: auto;
  padding: 15px; 
  background-color: #ffffff; 
}

.btn btn-primary{
  margin-block-start: 60px;
}

button.btn-warning {
  background-color: #7cb342; 
  border: none; 
}

#basic-addon1 {
  border-color: #f2eddd; 
  background-color: antiquewhite;

}
</style>