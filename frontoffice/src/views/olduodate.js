<script>

<template>
    <div>
      
      <h1>Update Profile</h1>
      <form @submit.prevent="updateProfile">
        <!-- Job -->
        <label for="job">Job:</label>
        <input type="text" v-model="formData.job" id="job" required>
        
        <!-- About Me -->
        <label for="aboutMe">About Me:</label>
        <textarea v-model="formData.aboutMe" id="aboutMe" required></textarea>
        
        <!-- CV -->
        <label for="cv">CV:</label>
        <input type="file" @change="handleCVUpload" id="cv" accept=".pdf">
        
        <!-- Profile Type -->
        <label for="profileType">Profile Type:</label>
        <select v-model="formData.profile_type" id="profileType" required>
          <option value="Working">Working</option>
          <option value="Student">Student</option>
          <!-- Add more options as needed -->
        </select>
        
        <!-- Interests -->
        <label for="interests">Interests:</label>
        <input type="text" v-model="interest"  id="interests">
        <ul>
          <li v-for="(interest, index) in formData.interests" :key="index">{{ interest.name }}</li>
        </ul>
        
        <!-- Languages -->
        <div v-for="(language, index) in formData.languages" :key="index">
          <label :for="'languageName-' + index">Language Name:</label>
          <input type="text" v-model="language.name" :id="'languageName-' + index">
          
          <label :for="'languageLevel-' + index">Language Level:</label>
          <select v-model="language.level" :id="'languageLevel-' + index">
            <option value="Native">Native</option>
            <option value="B2">B2</option>
            <option value="B1">B1</option>
            <!-- Add more options as needed -->
          </select>
          
          <label :for="'certificateID-' + index">Certificate ID:</label>
          <input type="checkbox" v-model="language.certificateID" :id="'certificateID-' + index">
        </div>
        
        <div>
      <h3>Experience</h3>
      <small @click.prevent="addExperience">Ajouter une expérience</small>

      <div v-for="(exp, index) in formData.experience" :key="index">
        <label :for="'expTitle-' + index">Title:</label>
        <input type="text" v-model="exp.title" :id="'expTitle-' + index">

        <label :for="'expDescription-' + index">Description:</label>
        <textarea v-model="exp.description" :id="'expDescription-' + index"></textarea>

        <label :for="'expDateStart-' + index">Start Date:</label>
        <input type="date" v-model="exp.dateStart" :id="'expDateStart-' + index">

        <label :for="'expDateEnd-' + index">End Date:</label>
        <input type="date" v-model="exp.dateEnd" :id="'expDateEnd-' + index">

        <label :for="'expCompanyName-' + index">Company Name:</label>
        <input type="text" v-model="exp.companyName" :id="'expCompanyName-' + index">
      </div>
    </div>

    <!-- Certificates -->
    <div>
      <h3>Certificates</h3>
      <small @click.prevent="addCertificate">Ajouter Certificates</small>
      <div v-for="(certificate, index) in formData.certificates" :key="index">
        <label :for="'certTitle-' + index">Title:</label>
        <input type="text" v-model="certificate.title" :id="'certTitle-' + index">

        <label :for="'certID-' + index">Certificate ID:</label>
        <input type="text" v-model="certificate.certificateID" :id="'certID-' + index">

        <label :for="'certExpeditionDate-' + index">Expedition Date:</label>
        <input type="date" v-model="certificate.expeditionDate" :id="'certExpeditionDate-' + index">

        <label :for="'certExpeditionCompany-' + index">Expedition Company:</label>
        <input type="text" v-model="certificate.expeditionCompany" :id="'certExpeditionCompany-' + index">
      </div>
    </div>

    <!-- Education -->
    <div>
      <h3>Education</h3>
      <small @click.prevent="addEducation">Ajouter Education</small>
      <div v-for="(edu, index) in formData.education" :key="index">
        <label :for="'eduTitle-' + index">Title:</label>
        <input type="text" v-model="edu.title" :id="'eduTitle-' + index">

        <label :for="'eduType-' + index">Education Type:</label>
        <input type="text" v-model="edu.educationType" :id="'eduType-' + index">

        <label :for="'eduDateStart-' + index">Start Date:</label>
        <input type="date" v-model="edu.dateStart" :id="'eduDateStart-' + index">

        <label :for="'eduDateEnd-' + index">End Date:</label>
        <input type="date" v-model="edu.dateEnd" :id="'eduDateEnd-' + index">

        <label :for="'eduInstitution-' + index">Institution Name:</label>
        <input type="text" v-model="edu.institutionName" :id="'eduInstitution-' + index">
      </div>
    </div>
        
        <input type="submit" value="Update Profile">
      </form>
    </div>
  </template>
  
</script>