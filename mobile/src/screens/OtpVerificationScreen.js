import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import { colors } from '../theme/colors';

const OtpVerificationScreen = ({ navigation }) => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step === 1 && phone.length > 8) {
      setStep(2);
    } else if (step === 2 && otp.length === 6) {
      // In a real app, this would verify the OTP and navigate to Main Home
      alert('OTP Verified! Welcome to TrustDrive.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <View style={styles.header}>
          <Text style={styles.title}>{step === 1 ? 'Enter Phone Number' : 'Verify OTP'}</Text>
          <Text style={styles.subtitle}>
            {step === 1 
              ? 'We will send a 6-digit OTP to verify your account.' 
              : `Enter the 6-digit code sent to ${phone}`}
          </Text>
        </View>

        <View style={styles.inputContainer}>
          {step === 1 ? (
            <TextInput
              style={styles.input}
              placeholder="Mobile Number"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
              maxLength={15}
            />
          ) : (
            <TextInput
              style={[styles.input, { textAlign: 'center', letterSpacing: 8, fontSize: 24 }]}
              placeholder="000000"
              keyboardType="number-pad"
              value={otp}
              onChangeText={setOtp}
              maxLength={6}
            />
          )}
        </View>

        {step === 2 && (
          <TouchableOpacity style={styles.resendContainer}>
            <Text style={styles.resendText}>Didn't receive the code? Resend OTP</Text>
          </TouchableOpacity>
        )}

        <View style={styles.footer}>
          <TouchableOpacity 
            style={[
              styles.primaryButton, 
              ((step === 1 && phone.length < 8) || (step === 2 && otp.length < 6)) && styles.disabledButton
            ]}
            onPress={handleNext}
            disabled={(step === 1 && phone.length < 8) || (step === 2 && otp.length < 6)}
          >
            <Text style={styles.primaryButtonText}>
              {step === 1 ? 'Send OTP' : 'Verify & Continue'}
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  keyboardView: {
    flex: 1,
    padding: 24,
  },
  header: {
    marginTop: 40,
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.secondary,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textLight,
    lineHeight: 24,
  },
  inputContainer: {
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#EAEAEA',
    borderRadius: 12,
    padding: 16,
    fontSize: 18,
    color: colors.text,
    backgroundColor: '#FAFAFA',
  },
  resendContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  resendText: {
    color: colors.textLight,
    fontSize: 14,
    fontWeight: '500',
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  primaryButton: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  disabledButton: {
    opacity: 0.5,
  },
  primaryButtonText: {
    color: colors.secondary,
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default OtpVerificationScreen;
