import React from 'react';
import { View, Text, TextInput, Button, Pressable, StyleSheet, SafeAreaView } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  email: yup.string().email('Entrez une adresse e-mail valide').required('L\'adresse e-mail est requise'),
  password: yup.string().min(6, 'Le mot de passe doit comporter au moins 6 caractères').required('Le mot de passe est requis'),
  lastName: yup.string().required('Le nom de famille est requis'),
  firstName: yup.string().required('Le prénom est requis'),
  age: yup.number()
});

export default function LoginForm() {

  return (
    <SafeAreaView style={styles.container}>
        <View>
      <Formik
        initialValues={{ email: '', password: '', lastName: '', firstName: '', age: ''}}
        onSubmit={() => {}} // OnSubmit est requis, mais nous allons utiliser useFormikContext
        validationSchema={validationSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View style={styles.form}>
            <TextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              placeholder="Adresse e-mail"
            />
            {errors.email && <Text>{errors.email}</Text>}
            <TextInput
              onChangeText={handleChange('firstName')}
              onBlur={handleBlur('firstName')}
              value={values.firstName}
              placeholder="Prénom"
            />
            {errors.firstName && <Text>{errors.firstName}</Text>}
            <TextInput
              onChangeText={handleChange('lastName')}
              onBlur={handleBlur('lastName')}
              value={values.lastName}
              placeholder="Nom de famille"
            />
            {errors.lastName && <Text>{errors.lastName}</Text>}
            <TextInput
              onChangeText={handleChange('age')}
              onBlur={handleBlur('age')}
              value={values.age}
              placeholder="Age"
            />
            {errors.age && <Text>L'age doit être un nombre</Text>}
            <TextInput
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              placeholder="Mot de passe"
              secureTextEntry
            />
            {errors.password && <Text>{errors.password}</Text>}
            <Button title="Se connecter" onPress={() => handleSubmit()} />
          </View>
        )}
      </Formik>
    </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 30
    },
    form: {
        display: 'flex',
        gap: 5,
        fontSize: '35px',
        width: '80%'
    }
})