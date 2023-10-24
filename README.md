# MSIB_POSYANDU_KADER_FE
## HALAMAN LOGIN

### LOGIN

**Endpoint** : `/api/auth/login`

**method** : `POST`

**Request** : 
```
 {
    phone : "STRING"
 }
``` 
**Response** : `200 OK`
```
data: {
    data : {
        id    : INTEGER,
        phone : "STRING",
        code  : INTEGER
    }
}
```
**Error**
```
{
    Status : “error”,
    message : “No telepon tidak ditemukan”
}
```

### VERIFIKASI

**Endpoint** : `/api/auth/verify`

**method** : `POST`

**Request** : 
```
 {
    phone : "STRING",
    code  :INTEGER
 }
``` 
**Response** : `200 OK`
```
data: {
    status : "success",
    Token  : "STRING",
    data : {
        id    : INTEGER,
        phone : "STRING",
        level : "user"
    }
}
```
**Error**
```
{
    Status : “error”,
    message : “Otp does not match”
}
```
           
-----------------------------------------------------
 
## HALAMAN DATA PROFILE :

### PROFILE KADER  

**Endpoint** : `/api/user/fill-profile/id_user`

**method** : `GET`
    
**Response** : `200 OK`
```
data: {
    status: "success",
    data: {
        name : 'STRING',
        phone: 'STRING',
        nik  : 'STRING',
        address: 'STRING',
        posyandu_name: 'STRING',
        posyandu_address: 'STRING',
        kader_status: ‘STRING’,
    }
}
```
**Error**
```
{
    status: "error",
    message: "Data tidak ditemukan"
}
```

### EDIT PROFILE

**Endpoint** : `api/user/edit_profile`

**method** : `POST`

**Request** : 
```
 {
        name : 'STRING',
        phone: 'STRING',
        nik  : 'STRING',
        address: 'STRING',
        posyandu_name: 'STRING',
        posyandu_address: 'STRING',
        kader_status: ‘STRING’,
 }
``` 
**Response** : `200 OK`
```
data: {
    status : "success",
    data : {
        name : 'STRING',
        phone: 'STRING',
        nik  : 'STRING',
        address: 'STRING',
        posyandu_name: 'STRING',
        posyandu_address: 'STRING',
        kader_status: ‘STRING’,
    }
}
```
**Error**
```
{
    Status : “error”,
}
```
-------------------------------------------------------

## HALAMAN DATA PESERTA PEMERIKSAAN :

### DATA IBU

**Endpoint** : `/api/user/data_ibu`

**method** : `GET`
    
**Response** : `200 OK`
```
data: {
    status: "success",
    data: {
        id_peserta: 'INTEGER',
        mom_name : 'STRING',
        nik  : 'STRING',
        children_name: 'STRING',
    }
}
```
**Error**
```
{
    status: "error",
    message: "Data tidak ditemukan"
}
```

### PROFIL IBU

**Endpoint** : `/api/user/profil_ibu`

**method** : `GET`
    
**Response** : `200 OK`
```
data: {
    status: "success",
    data: {
        id_peserta: 'INTEGER',
        mom_name : 'STRING',
        dad_name  : 'STRING',
        nik: 'STRING',
        phone: 'STRING',
        address: 'STRING',
        children_name: 'STRING',
    }
}
```

**Error**
```
{
    status: "error",
    message: "Data tidak ditemukan"
}
```

### DATA ANAK

**Endpoint** : `/api/kader/children`

**method** : `GET`
    
**Response** : `200 OK`
```
data: {
    status: "success",
    data: {
        children_name: 'ARRAY',
        sex: 'ARRAY',
    }
}
```
**Error**
```
{
    status: "error",
    message: "Data tidak ditemukan"
}
```

### PROFIL ANAK

**Endpoint** : `/api/kader/children/profil_anak`

**method** : `GET`
    
**Response** : `200 OK`
```
data: {
    status: "success",
    data: {
        name : "STRING",
        birth_place : "STRING",
        birth_date : "DATE",
        sex : "STRING",
        newborn_weight : "FLOAT",
        newborn_height : "FLOAT",
        child_to : "STRING",
        month : "STRING",
        mom_name : "STRING",
        dad_name : "STRING",
    }
}
```
**Error**
```
{
    status: "error",
    message: "Data tidak ditemukan"
}
```

### FORMULIR ANAK

**Endpoint** : `api/kader/children/form_anak`

**method** : `POST`

**Request** : 
```
 {
    name : "STRING",
    birth_place : "STRING",
    birth_date : "DATE",
    sex : "STRING",
    newborn_weight : "FLOAT",
    newborn_height : "FLOAT",
    child_to : "STRING",
    month : "STRING",
    mom_name : "STRING",
    dad_name : "STRING",
 }
``` 
**Response** : `200 OK`
```
data: {
    status : "success",
    data : {
        name : "STRING",
        birth_place : "STRING",
        birth_date : "DATE",
        sex : "STRING",
        newborn_weight : "FLOAT",
        newborn_height : "FLOAT",
        child_to : "STRING",
        month : "STRING",
        mom_name : "STRING",
        dad_name : "STRING",
    }
}
```
**Error**
```
{
    Status : “error”,
}
```

### FORMULIR PEMERIKSAAN

**Endpoint** : `api/kader/children/form_checkup `

**method** : `POST`

**Request** : 
```
 {
    implementation_time : "DATE",
    weight : "FLOAT",
    height : "FLOAT",
    head_circumferene : "FLOAT",
    arm_circumference : "FLOAT",
    kader_note : "TEXT",
 }
``` 
**Response** : `200 OK`
```
data: {
    status : "success",
    data : {
        implementation_time : "DATE",
        weight : "FLOAT",
        height : "FLOAT",
        head_circumferene : "FLOAT",
        arm_circumference : "FLOAT",
        kader_note : "TEXT",
    }
}
```
**Error**
```
{
    Status : “error”,
}
```

### FORMULIR IMUNISASI

**Endpoint** : `api/kader/children/form_imunisasi `

**method** : `POST`

**Request** : 
```
 {
    implementation_time : "DATE",
    imunisasi_type : "STRING",
    imunisasi_location : "STRING",
    imunisasi_schedule : "DATE",
    ticket_number : "STRING",
    kader_note : "TEXT",
 }
``` 
**Response** : `200 OK`
```
data: {
    status : "success",
    data : {
        implementation_time : "DATE",
        imunisai type : "STRING",
        imunisasi_location : "STRING",
        imunisasi_schedule : "DATE",
        ticket_number : "STRING",
        kader_note : "TEXT",
    }
}
```
**Error**
```
{
    Status : “error”,
}
```
## LAPORAN POSYANDU :

**Endpoint** : `api/kader/laporan_posyandu`

**method** : `POST`

**Request** : 
```
 {
    name : "STRING",
    posyandu_name : "STRING",
    activity_place : "STRING",
    activity_date : "DATE",
    activity_time : "STRING",
    number_of_member : "STRING",
    activity_desc : “TEXT”,
    activity_documentation : “VARCHAR”,
 }
``` 
**Response** : `200 OK`
```
data: {
    status : "success",
    data : {
    name : "STRING",
    posyandu_name : "STRING",
    activity_place : "STRING",
    activity_date : "DATE",
    activity_time : "STRING",
    number_of_member : "STRING",
    activity_desc : “TEXT”,
    activity_documentation : “VARCHAR”,    }
}
```
**Error**
```
{
    Status : “error”,
}
```

## JADWAL POSYANDU :

### TAMBAH JADWAL

**Endpoint** : `api/kader/tambah_jadwal `

**method** : `POST`

**Request** : 
```
 {
    activity_name : "STRING",
    posyandu_name : "STRING",
    activity_date : "STRING",
    activity_time : "STRING",
    activity_location : "STRING",
 }
``` 
**Response** : `200 OK`
```
data: {
    status : "success",
    data : {
        activity_name : "STRING",
        posyandu_name : "STRING",
        activity_date : "STRING",
        activity_time : "STRING",
        activity_location : "STRING",
    }
}
```
**Error**
```
{
    Status : “error”,
}
```

### TAMBAH LOKASI

**Endpoint** : `api/kader/tambah_lokasi `

**method** : `POST`

**Request** : 
```
 {
    address : "STRING",
    district : "STRING",
    urban_village : "STRING",
 }
``` 
**Response** : `200 OK`
```
data: {
    status : "success",
    data : {
        address : "STRING",
        district : "STRING",
        urban_village : "STRING",
    }
}
```
**Error**
```
{
    Status : “error”,
}
```




