import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { router } from 'expo-router';
import { Icon } from '@/components/Icon';
import { colors } from '@/src/theme';

export default function Login() {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<'cliente' | 'repartidor'>('cliente');
  return (
    <View style={styles.page}>
      <View style={styles.top}><View style={styles.brandMark}><Icon name="leaf" size={26} color={colors.ink} /></View><Text style={styles.logo}>urbacargo</Text></View>
      <Text style={styles.eyebrow}>MENSAJERÍA URBANA CONSCIENTE</Text>
      <View style={styles.hero}><Text style={styles.title}>Tus envíos,</Text><Text style={styles.titleAccent}>en buenas manos.</Text><Text style={styles.copy}>La forma rápida y sostenible de mover lo que importa por la ciudad.</Text></View>
      <View style={styles.form}>
        <Text style={styles.label}>INGRESA COMO</Text>
        <View style={styles.rolePicker}><Pressable onPress={() => setRole('cliente')} style={[styles.role, role === 'cliente' && styles.roleActive]}><Icon name="person-outline" size={17} color={role === 'cliente' ? colors.ink : colors.muted} /><Text style={[styles.roleText, role === 'cliente' && styles.roleTextActive]}>Cliente</Text></Pressable><Pressable onPress={() => setRole('repartidor')} style={[styles.role, role === 'repartidor' && styles.roleActive]}><Icon name="bicycle-outline" size={17} color={role === 'repartidor' ? colors.ink : colors.muted} /><Text style={[styles.roleText, role === 'repartidor' && styles.roleTextActive]}>Repartidor</Text></Pressable></View>
        <Text style={styles.label}>CORREO ELECTRÓNICO</Text>
        <TextInput value={email} onChangeText={setEmail} placeholder="tu@correo.com" placeholderTextColor="#9BAAA3" keyboardType="email-address" style={styles.input} autoCapitalize="none" />
        <Text style={styles.label}>CONTRASEÑA</Text>
        <TextInput placeholder="••••••••" placeholderTextColor="#9BAAA3" secureTextEntry style={styles.input} />
          <Pressable><Text style={styles.forgot}>¿Olvidaste tu contraseña?</Text></Pressable>
        <Pressable style={styles.button} onPress={() => router.replace(role === 'repartidor' ? '/repartidor' : '/(tabs)')}><Text style={styles.buttonText}>{role === 'repartidor' ? 'Entrar como repartidor' : 'Entrar a mi cuenta'}</Text><Icon name="arrow-forward" size={20} color={colors.ink} /></Pressable>
        <Text style={styles.or}>o continúa con</Text>
        <Pressable style={styles.outlineButton} onPress={() => router.replace('/(tabs)')}><Icon name="logo-google" size={18} color={colors.ink} /><Text style={styles.outlineText}>Google</Text></Pressable>
      </View>
      <Text style={styles.footer}>¿Aún no tienes cuenta? <Text style={styles.link}>Regístrate</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: colors.cream, padding: 28, paddingTop: 68 },
  top: { flexDirection: 'row', alignItems: 'center', gap: 10 }, brandMark: { width: 45, height: 45, borderRadius: 16, backgroundColor: colors.lime, alignItems: 'center', justifyContent: 'center' }, logo: { fontSize: 23, fontWeight: '800', color: colors.ink, letterSpacing: -1 },
  eyebrow: { color: colors.moss, fontSize: 10, fontWeight: '800', letterSpacing: 1.5, marginTop: 36 }, hero: { marginTop: 18 }, title: { color: colors.ink, fontSize: 39, fontWeight: '800', lineHeight: 44, letterSpacing: -1.5 }, titleAccent: { color: colors.green, fontSize: 39, fontWeight: '800', lineHeight: 44, letterSpacing: -1.5 }, copy: { color: colors.muted, fontSize: 15, lineHeight: 22, marginTop: 14, maxWidth: 290 },
  form: { marginTop: 34 }, label: { color: colors.muted, fontSize: 10, fontWeight: '800', letterSpacing: 1.2, marginBottom: 8, marginTop: 14 }, rolePicker: { flexDirection: 'row', gap: 8 }, role: { flex: 1, height: 46, borderRadius: 12, borderWidth: 1, borderColor: colors.line, backgroundColor: colors.white, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 7 }, roleActive: { backgroundColor: colors.lime, borderColor: colors.lime }, roleText: { color: colors.muted, fontSize: 12, fontWeight: '700' }, roleTextActive: { color: colors.ink }, input: { backgroundColor: colors.white, borderWidth: 1, borderColor: colors.line, borderRadius: 12, height: 52, paddingHorizontal: 16, color: colors.ink, fontSize: 15 }, button: { backgroundColor: colors.lime, height: 54, borderRadius: 14, marginTop: 24, paddingHorizontal: 18, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 12 }, buttonText: { color: colors.ink, fontSize: 15, fontWeight: '800' }, or: { textAlign: 'center', color: colors.muted, fontSize: 12, marginVertical: 16 }, outlineButton: { height: 52, borderRadius: 14, borderWidth: 1, borderColor: colors.line, backgroundColor: colors.white, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10 }, outlineText: { color: colors.ink, fontWeight: '700' }, footer: { textAlign: 'center', color: colors.muted, fontSize: 13, marginTop: 'auto' }, link: { color: colors.moss, fontWeight: '800' },
    forgot: { color: colors.moss, textAlign: 'right', fontSize: 11, fontWeight: '700', marginTop: 9 },
});