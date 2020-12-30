<template>
  <div
    class="d-flex align-items-center text-light text-center flex-column mt-5 mt-xl-8"
  >
    <h1 class="font-weight-normal px-xl-6 fs-52">
      {{ $t("clients") }}
    </h1>
    <div
      class="mt-lg-11 d-flex justify-content-start align-items-center flex-column flex-lg-row"
    >
      <div class="d-flex align-items-center flex-column">
        <div class="card bg-warning clientCard w-22">
          <div class="d-flex align-items-center p-5">
            <img
              src="https://s3-alpha-sig.figma.com/img/1664/0dc1/2a055c78a67003b018f22d24fb03e964?Expires=1610323200&Signature=UuaGcth3boG2WoY8Ad-tk6aO59dcBizJMGxHX3~YpWO9LQ5NUSkm0uGFq30H6iJXMbExOZxahAqzpt6OU5zpJF9ypGQMCSbzucryj18ljyFt3pFZYGSNkFuD~AHPbt6pG8SM6VzGI3HV2GdaFSi4VOtofm~zEnCYA-k5PPmkn2PaopEpr8q6B1BvOkmN4Y~Iuaj~1wEi6ZoG478V0XpJFozgpDFgdN0sPiAiklpNjPshC90mXZDqndJ5nlKaFXo241TPu2YyziJe7svz03e1eOcCRu3T9bpT-fqWNY3f2~BctZKqlnm-9ITkjUEO6-Oyu8xshu1QRvEpw9TuFsOFNA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              width="50"
              height="50"
              class="border-radius-5"
            />
            <div
              class="d-flex flex-column justify-content-center align-items-center ml-4"
            >
              <p class="mb-0">Clair Bell</p>
              <p class="mt-1 mb-0">{{ $t("designer") }}</p>
            </div>
          </div>
          <h1 class="pr-11 text-left ml-5 font-weight-normal fs-16 lh-32">
            {{ $t("clientCard") }}
          </h1>
        </div>
        <div class="card bg-warning mt-3 clientCard w-22">
          <div class="d-flex align-items-center p-5">
            <img
              src="https://s3-alpha-sig.figma.com/img/bfe5/8b21/510ca86917b9c3ccc0913f92357582be?Expires=1610323200&Signature=HovdscEtjwR~HWvQcLy3jEagYFZwkBbg1eY2-MKxw7O1ZRd2RZ4BLJKU9pOKxe5DBveEaOE5lxGSWrVXUjBGrZ92c4Rrshk8mkrMWtSo2l2wcKWP18nHY8WGu6JWQb6vGJSIw8DzLxIeNVDT9dp9xtWt0P48ctoissuu2eXQf2cxdbS4Ka0FLs6HNQjDoTRlwwokdSJtLHhVr0OJoNuUgN~pN4fIlSmspTt48MwwowPoVMv3GMEiiixVBx~TABaJgN6fdQB1~hppOG3ka2kZ5qNRHRicQttfLSEHc3em0GIrO80gCf4EgIP-9JUZUhVEwK8kjc2zYJ9JEuEDEmYVIg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              width="50"
              height="50"
              class="border-radius-5"
            />
            <div
              class="d-flex flex-column justify-content-center align-items-center ml-4"
            >
              <p class="mb-0 ml-1">Ralph Fisher</p>
              <p class="mt-1 mb-0 mr-3">{{ $t("designer") }}</p>
            </div>
          </div>
          <h1 class="pr-11 text-left ml-5 font-weight-normal fs-16 lh-32">
            {{ $t("clientCard") }}
          </h1>
        </div>
      </div>
      <div class="d-flex align-items-center flex-column ml-lg-4 mt-2 mt-lg-9">
        <div class="card bg-warning clientCard w-22">
          <div class="d-flex align-items-center p-5">
            <img
              src="https://s3-alpha-sig.figma.com/img/5fb0/a0fb/ba3c0c89bc4199d6dd2885aad8cee018?Expires=1610323200&Signature=EE2nvGBEipqQcF9bcdp3-YxP7URu7J8bMLcVSuCfw5jvrw80Ld7LiYXbKpn6Ygr~VQWxiFSsa~86Sl0zhKCpTcmy-PnoTVc4cL9PsMj1u34sbKrUDB56xkP3PT9uBdoqDLSQnGq13-9jrUVQuBIWx3GCtfs2J~foufqLMw07DQnIkTYMsSUzxCgYsyW3lvUPNH9ph95RFE~qyiPJf5y-K9c3pYldHg0jiQQOAAEJYbRyyWYzB1PWQFjDLF3zFucAGvYze0Cy67LZ6xfXZ9oewXgGn4Y3R4GLA8DGujCuN8KX0GTleyj46uw3hzS4PMB2bf7R4ltby1SNxoQdMjN7nw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              width="50"
              height="50"
              class="border-radius-5"
            />
            <div
              class="d-flex flex-column justify-content-center text-left align-items-center ml-4"
            >
              <p class="mb-0 ml-2">Franciso Lane</p>
              <p class="mt-1 mb-0 mr-4">{{ $t("designer") }}</p>
            </div>
          </div>
          <h1 class="pr-11 text-left ml-5 font-weight-normal fs-16 lh-32">
            {{ $t("clientCardHuge") }}
          </h1>
        </div>
        <div class="card bg-warning mt-3 clientCard w-22">
          <div class="d-flex align-items-center p-5">
            <img
              src="https://s3-alpha-sig.figma.com/img/bfe5/8b21/510ca86917b9c3ccc0913f92357582be?Expires=1610323200&Signature=HovdscEtjwR~HWvQcLy3jEagYFZwkBbg1eY2-MKxw7O1ZRd2RZ4BLJKU9pOKxe5DBveEaOE5lxGSWrVXUjBGrZ92c4Rrshk8mkrMWtSo2l2wcKWP18nHY8WGu6JWQb6vGJSIw8DzLxIeNVDT9dp9xtWt0P48ctoissuu2eXQf2cxdbS4Ka0FLs6HNQjDoTRlwwokdSJtLHhVr0OJoNuUgN~pN4fIlSmspTt48MwwowPoVMv3GMEiiixVBx~TABaJgN6fdQB1~hppOG3ka2kZ5qNRHRicQttfLSEHc3em0GIrO80gCf4EgIP-9JUZUhVEwK8kjc2zYJ9JEuEDEmYVIg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              width="50"
              height="50"
              class="border-radius-5"
            />
            <div
              class="d-flex flex-column justify-content-center align-items-center ml-4"
            >
              <p class="mb-0 ml-2">Jorge Murphy</p>
              <p class="mt-1 mb-0 mr-4">{{ $t("designer") }}</p>
            </div>
          </div>
          <h1 class="pr-11 text-left ml-5 font-weight-normal fs-16 lh-32">
            {{ $t("clientCard") }}
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Clients",
};
</script>
<style scoped>
.clientCard {
  border: 1px solid #eab939;
  border-radius: 12px;
}
</style>