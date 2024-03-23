<template>
 <div class="container"> <h1>Update Profile</h1> 
<form @submit.prevent="updateProfile">
 <!-- Job --> <b-form-group label="Job:">
   <b-form-input type="text" v-model="formData.job" required></b-form-input> 
</b-form-group>
  <!-- About Me -->
  <b-form-group label="About Me:">
    <b-form-textarea v-model="formData.aboutMe" required></b-form-textarea>
  </b-form-group>

  <!-- CV -->
  <b-form-group label="CV:">
    <b-form-file @change="handleCVUpload" id="cv" accept=".pdf" required></b-form-file>
  </b-form-group>

  <!-- Profile Type -->
  <b-form-group label="Profile Type:">
    <b-form-select v-model="formData.profile_type" required>
      <b-form-select-option value="Working">Working</b-form-select-option>
      <b-form-select-option value="Student">Student</b-form-select-option>
      <!-- Add more options as needed -->
    </b-form-select>
  </b-form-group>

  <!-- Interests -->
  <b-form-group label="Interests:">
    <b-form-input type="text" v-model="interest" @keydown.enter="addInterest" id="interests" required></b-form-input>
    <b-list-group>
      <b-list-group-item v-for="(interest, index) in formData.interests" :key="index">{{ interest.name }}</b-list-group-item>
    </b-list-group>
  </b-form-group>

  <!-- Languages -->
  <b-form-group>
    <h3>Languages:</h3>
    <div v-for="(language, index) in formData.languages" :key="index">
    <b-form-group label="Language Name:" >
      <b-form-input type="text" v-model="language.name" required></b-form-input>
    </b-form-group>

    <b-form-group label="Language Level:">
      <b-form-select v-model="language.level" required>
        <b-form-select-option value="Native">Native</b-form-select-option>
        <b-form-select-option value="B2">B2</b-form-select-option>
        <b-form-select-option value="B1">B1</b-form-select-option>
        <!-- Add more options as needed -->
      </b-form-select>
   
    </b-form-group>

    <b-form-group label="Certificate ID:">
      <b-form-checkbox v-model="language.certificateID" required></b-form-checkbox>
    </b-form-group>
  </div>
  </b-form-group>

  <!-- Experience -->
  <b-form-group>
    <h3>Experience:</h3>
    <b-button @click.prevent="addExperience" variant="primary">Add Experience</b-button>
    <div v-for="(exp, index) in formData.experience" :key="index">
    <b-form-group label="Title:" >
      <b-form-input type="text" v-model="exp.title" required></b-form-input>
    </b-form-group>

    <b-form-group label="Description:">
      <b-form-textarea v-model="exp.description" required></b-form-textarea>
    </b-form-group>

    <b-form-group label="Start Date:">
      <b-form-input type="date" v-model="exp.dateStart" required></b-form-input>
    </b-form-group>

    <b-form-group label="End Date:">
      <b-form-input type="date" v-model="exp.dateEnd" required></b-form-input>
   </b-form-group>

    <b-form-group label="Company Name:">
      <b-form-input type="text" v-model="exp.companyName" required></b-form-input>
    </b-form-group>
  </div>
  </b-form-group>

  <!-- Certificates -->
  <b-form-group>
    <h3>Certificates:</h3>
    <b-button @click.prevent="addCertificate" variant="primary">Add Certificates</b-button>
    <div v-for="(certificate, index) in formData.certificates" :key="index">
    <b-form-group label="Title:" >
      <b-form-input type="text" v-model="certificate.title" required></b-form-input>
    </b-form-group>

    <b-form-group label="Certificate ID:">
      <b-form-input type="text" v-model="certificate.certificateID" required></b-form-input>
    </b-form-group>

    <b-form-group label="Expedition Date:">
      <b-form-input type="date" v-model="certificate.expeditionDate" required></b-form-input>
    </b-form-group>

    <b-form-group label="Expedition Company:">
      <b-form-input type="text" v-model="certificate.expeditionCompany" required></b-form-input>
    </b-form-group>
  </div>
  </b-form-group>

  <!-- Education -->
  <b-form-group>
    <h3>Education:</h3>
    <b-button @click.prevent="addEducation" variant="primary">Add Education</b-button>
   <div v-for="(edu, index) in formData.education" :key="index"> 
    <b-form-group label="Title:" >
      <b-form-input type="text" v-model="edu.title" required></b-form-input>
    </b-form-group>

    <b-form-group label="Education Type:">
      <b-form-input type="text" v-model="edu.educationType" required></b-form-input>
    </b-form-group>

    <b-form-group label="Start Date:">
      <b-form-input type="date" v-model="edu.dateStart" required></b-form-input>
    </b-form-group>

    <b-form-group label="End Date:">
      <b-form-input type="date" v-model="edu.dateEnd" required></b-form-input>
    </b-form-group>

    <b-form-group label="Institution Name:">
      <b-form-input type="text" v-model="edu.institutionName" required></b-form-input>
    </b-form-group>
   </div> 
  </b-form-group>

  <b-button type="submit" variant="primary">Update Profile</b-button>
</form>
</div> </template>

  <script>
  import {BFormGroup, BFormInput , BFormTextarea , BFormSelect , BFormSelectOption,BListGroup , BListGroupItem } from 'bootstrap-vue';
  export default {
    components: {
    // Register imported BootstrapVue components
    BListGroup,
    BFormGroup,
    BFormInput ,
    BFormTextarea ,
    BFormSelect ,
    BFormSelectOption,
    BListGroupItem,
  },
    data() {
      return {
        formData: {
          job: '',
          aboutMe: '',
          cv: null,
          profile_type: '',
          interests: [],
          languages: [],
          experience: [],
          certificates: [],
          education: [],
          experience: [],
        certificates: [],
        education: [],
          // Add other fields from the data model
        },
        interest: '',
      };
    },

    methods: {
      async updateProfile() {
        // Send formData to backend for updating profile
        // Use FormData to handle file upload if needed
      },
      handleCVUpload(event) {
        // Handle file upload and store in formData
        const file = event.target.files[0];
        this.formData.cv = file;
      },
      addExperience() {
      this.formData.experience.push({
        title: '',
        description: '',
        dateStart: '',
        dateEnd: '',
        companyName: '',
      });
      console.log('La touche "Enter" a été enfoncée');

    },
    addCertificate() {
      this.formData.certificates.push({
        title: '',
        certificateID: '',
        expeditionDate: '',
        expeditionCompany: '',
      })
    },
    addEducation() {
      this.formData.education.push({
        title: '',
        educationType: '',
        dateStart: '',
        dateEnd: '',
        institutionName: '',
      })
    },
      addInterest() {
        // Add new interest to formData
        if (this.interest.trim() !== '') {
          this.formData.interests.push({ name: this.interest.trim() });
          this.interest = '';
        }
      },
      // Similar methods for other fields (languages, experience, certificates, education)
    },
  };
  </script>
  