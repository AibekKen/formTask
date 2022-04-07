<template>
  <div>
    <div ref="error" class="error-block">!Не заполненны обязательные поля</div>
    <div ref="ok" class="ok-block">Клиент добавлен</div>
    <h2 class="title">Данные клиента</h2>
    <form @submit.prevent="submitHandler" name="form" class="form" action="#">
      <div class="form__section">
        <div class="form__block">
          <label for="surname">Фамилия*</label>
          <input
            ref="surname"
            v-model="surname"
            type="text"
            class="input"
            autocomplete="off"
            id="surname"
          />
        </div>
        <div class="form__block">
          <label for="name">Имя*</label>
          <input
            ref="name"
            v-model="nameClient"
            type="text"
            class="input"
            autocomplete="off"
            name="name"
            id="namme"
          />
        </div>
        <div class="form__block">
          <label for="middleName">Отчество</label>
          <input
            v-model="middleName"
            type="text"
            class="input"
            autocomplete="off"
            name="middleName"
            id="middleName"
          />
        </div>
        <div class="form__block">
          <label for="birthday">Дата рождения</label>
          <input
            ref="birthday"
            v-model="birthday"
            type="date"
            class="input"
            autocomplete="off"
            name="birthday"
            id="birthday"
          />
        </div>
        <div class="form__block">
          <label for="phoneNumber">Номер телефона*</label>
          <input
            ref="phoneNumber"
            v-model="phoneNumber"
            type="tel"
            class="input"
            autocomplete="off"
            name="phoneNumber"
            id="phoneNumber"
          />
        </div>
        <div class="form__radio-block radio-block">
          <h4 class="form__subtitle">Пол:</h4>
          <div class="radio-block__input">
            <input v-model="sex" type="radio" value="male" name="sex" checked />
            <label class="radio-block__label">муж</label>
          </div>
          <div class="radio-block__input">
            <input v-model="sex" type="radio" value="famale" name="sex" />
            <label class="radio-block__label">жен</label>
          </div>
        </div>
        <div class="form__select-block">
          <h4 class="form__subtitle">Группа клиентов*</h4>
          <select ref="group" multiple v-model="group" name="" id="">
            <option value="VIP">VIP</option>
            <option value="problem">Проблемные</option>
            <option value="OSM">ОМС</option>
          </select>
        </div>
        <div class="form__select-block">
          <h4 class="form__subtitle">Лечащий врач</h4>
          <select v-model="doctor" name="doctor" id="doctor">
            <option selected value="Иванов">Иванов</option>
            <option value="Захаров">Захаров</option>
            <option value="Чернышева">Чернышева</option>
          </select>
        </div>
        <div class="form__radio-block radio-block">
          <h4 class="form__subtitle">Отправять СМС:</h4>
          <div class="radio-block__input">
            <input type="radio" v-model="sms" name="sms" value="yes" checked />
            <label class="radio-block__label">да</label>
          </div>
          <div class="radio-block__input">
            <input type="radio" v-model="sms" name="sms" value="no" />
            <label class="radio-block__label">нет</label>
          </div>
        </div>
      </div>

      <h2 class="subtitle">Адрес:</h2>
      <div class="form__section">
        <div class="form__block">
          <label for="postIndex">Индекс</label>
          <input
            v-model="postIndex"
            type="text"
            class="input"
            autocomplete="off"
            id="postIndex"
          />
        </div>
        <div class="form__block">
          <label for="country">Страна</label>
          <input
            v-model="country"
            type="text"
            class="input"
            autocomplete="off"
            name="country"
            id="country"
          />
        </div>
        <div class="form__block">
          <label for="region">Область</label>
          <input
            v-model="region"
            type="text"
            class="input"
            autocomplete="off"
            name="region"
            id="region"
          />
        </div>
        <div class="form__block">
          <label for="city">Город*</label>
          <input
            ref="city"
            v-model="city"
            type="text"
            class="input"
            autocomplete="off"
            name="city"
            id="city"
          />
        </div>
        <div class="form__block">
          <label for="street">Улица</label>
          <input
            v-model="street"
            type="text"
            class="input"
            autocomplete="off"
            name="street"
            id="street"
          />
        </div>
        <div class="form__block">
          <label for="house">Дом</label>
          <input
            v-model="house"
            type="text"
            class="input"
            autocomplete="off"
            name="house"
            id="house"
          />
        </div>
      </div>
      <h2 class="subtitle">Паспортные данные:</h2>
      <div class="form__section">
        <div class="form__select-block">
          <h4 class="form__subtitle">Тип документа*</h4>
          <select
            v-model="documentType"
            name="documentType"
            id="documentType"
            ref="documentType"
          >
            <option value="Паспорт">Паспорт</option>
            <option value="Свид. о рождении">Свидетельство о рождении</option>
            <option value="Вод. уд">Вод. удостоверение</option>
          </select>
        </div>
        <div class="form__block">
          <label for="docSerial">Серия</label>
          <input
            v-model="docSerial"
            type="text"
            class="input"
            autocomplete="off"
            id="docSerial"
          />
        </div>
        <div class="form__block">
          <label for="docNumber">Номер</label>
          <input
            v-model="docNumber"
            type="text"
            class="input"
            autocomplete="off"
            name="docNumber"
            id="docNumber"
          />
        </div>
        <div class="form__block">
          <label for="docFromDep">Кем выдан</label>
          <input
            v-model="docFromDep"
            type="text"
            class="input"
            autocomplete="off"
            name="docFromDep"
            id="docFromDep"
          />
        </div>
        <div class="form__block">
          <label for="docDate">Дата выдачи*</label>
          <input
            ref="docDate"
            v-model="docDate"
            type="date"
            class="input"
            autocomplete="off"
            name="docDate"
            id="docDate"
          />
        </div>
      </div>
      <button class="form__submit" type="submit">Добавить</button>
    </form>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default {
  name: "FormList",
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      surname: "",
      nameClient: "",
      middleName: "",
      birthday: "",
      phoneNumber: "",
      sex: "",
      group: "",
      doctor: "",
      sms: "",
      documentType: "",
      postIndex: "",
      country: "",
      region: "",
      city: "",
      street: "",
      house: "",
      docSerial: "",
      docNumber: "",
      docFromDep: "",
      docDate: "",
    };
  },
  validations() {
    return {
      surname: { required },
      nameClient: { required },
      birthday: { required },
      city: { required },
      phoneNumber: { required },
      documentType: { required },
      docDate: { required },
      group: { required },
    };
  },
  methods: {
    submitHandler: function () {
      if (!this.v$.documentType.required.$response) {
        this.$refs.documentType.classList.add("err");
      }
      if (!this.v$.surname.required.$response) {
        this.$refs.surname.classList.add("err");
      }
      if (!this.v$.nameClient.required.$response) {
        this.$refs.name.classList.add("err");
      }
      if (!this.v$.phoneNumber.required.$response) {
        this.$refs.phoneNumber.classList.add("err");
      }
      if (!this.v$.birthday.required.$response) {
        this.$refs.birthday.classList.add("err");
      }
      if (!this.v$.city.required.$response) {
        this.$refs.city.classList.add("err");
      }
      if (!this.v$.docDate.required.$response) {
        this.$refs.docDate.classList.add("err");
      }
      if (!this.v$.group.required.$response) {
        this.$refs.group.classList.add("err");
      }
      if (
        !this.v$.documentType.required.$response ||
        !this.v$.surname.required.$response ||
        !this.v$.nameClient.required.$response ||
        !this.v$.phoneNumber.required.$response ||
        !this.v$.birthday.required.$response ||
        !this.v$.city.required.$response ||
        !this.v$.docDate.required.$response
      ) {
        this.$refs.error.classList.add("active");
        setTimeout(() => this.$refs.error.classList.remove("active"), 3000);
      } else {
        this.$refs.ok.classList.add("active");
        setTimeout(() => this.$refs.ok.classList.remove("active"), 3000);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
* {
  transition: all 0.3 ease;
}
.title {
  font-size: 24px;
  margin: 0 0 30px 0;
}
.subtitle {
  position: relative;
  font-weight: 700;
  margin: 0 0 20px 0;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -3px;
    height: 1px;
    width: 100%;
    background: #000;
  }
}
.form {
  &__subtitle {
    margin: 0 0 10px 0;
  }
  &__section {
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
  }
  &__block {
    display: flex;
    flex-direction: column;
    width: 200px;
    margin: 0 30px 30px 0;
  }
  &__radio-block {
    margin: 0 30px 30px 0;
  }

  &__select-block {
    width: 200px;
    margin: 0 30px 30px 0;
  }
  &__submit {
    width: 150px;
    height: 40px;
    background: teal;
    border-radius: 25px;
    font-size: 15px;
    &:hover {
      background: rgb(79, 231, 231);
    }
  }
}
.input {
  border: 1px solid #000;
  height: 30px;
  width: 200px;
  border-radius: 15px;
  padding: 10px;
  &:focus {
    background: rgba(115, 214, 115, 0.601);
  }
  &:focus::placeholder {
    opacity: 0;
  }
}
label {
  margin: 0 0 10px 0;
}

.title-sex {
  margin: 0 0 8px 0;
}

select {
  border: 1px solid rgba(0, 0, 0, 0.329);
}

.typed {
  background: rgb(118, 243, 118);
}

.err {
  background: rgba(255, 0, 0, 0.496);
  box-shadow: 0 0 10px rgb(219, 111, 111);
}
.error-block {
  visibility: hidden;
  opacity: 0;
  width: 220px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  background: white;
  border: 1px solid #000;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  box-shadow: 0 0 5px #000;
  color: red;
  font-size: 14px;
}
.error-block.active {
  visibility: visible;
  opacity: 1;
}
.ok-block {
  visibility: hidden;
  opacity: 0;
  width: 220px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  background: white;
  border: 1px solid #000;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  box-shadow: 0 0 5px #000;
  color: rgb(0, 255, 38);
  font-size: 14px;
}
.ok-block.active {
  visibility: visible;
  opacity: 1;
}
</style>
