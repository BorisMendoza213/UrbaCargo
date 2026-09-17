import { useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { Icon } from '@/components/Icon';
import { colors } from '@/src/theme';

type Message = { id: number; text: string; time: string; mine: boolean };

export default function Chat() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [draft, setDraft] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: 'Hola, ya recogí tu paquete. Voy en camino.', time: '17:08', mine: false },
    { id: 2, text: '¡Perfecto! Te esperamos en la recepción.', time: '17:09', mine: true },
  ]);

  const sendMessage = () => {
    const text = draft.trim();
    if (!text) return;
    setMessages((current) => [...current, { id: Date.now(), text, time: 'Ahora', mine: true }]);
    setDraft('');
  };

  return <KeyboardAvoidingView style={styles.page} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
    <View style={styles.header}><Pressable onPress={() => router.back()}><Icon name="arrow-back" size={22} color={colors.ink} /></Pressable><View style={styles.headerCenter}><Text style={styles.title}>Chat del envío</Text><Text style={styles.code}>{id || 'UC-2841'} · En camino</Text></View><View style={styles.avatar}><Text style={styles.avatarText}>JL</Text></View></View>
    <View style={styles.contact}><View style={styles.contactAvatar}><Text style={styles.contactInitials}>JL</Text></View><View style={{ flex: 1 }}><Text style={styles.contactName}>Juan Luis</Text><Text style={styles.contactRole}>Repartidor · Bicicleta eléctrica</Text></View><Pressable style={styles.call}><Icon name="call" size={18} color={colors.moss} /></Pressable></View>
    <ScrollView style={styles.messages} contentContainerStyle={styles.messageContent} showsVerticalScrollIndicator={false}><Text style={styles.today}>HOY · ENVÍO {id || 'UC-2841'}</Text>{messages.map((message) => <View key={message.id} style={[styles.messageRow, message.mine && styles.mineRow]}><View style={[styles.bubble, message.mine ? styles.mineBubble : styles.theirBubble]}><Text style={[styles.messageText, message.mine && styles.mineText]}>{message.text}</Text><Text style={[styles.time, message.mine && styles.mineTime]}>{message.time}</Text></View></View>)}</ScrollView>
    <View style={styles.composer}><TextInput value={draft} onChangeText={setDraft} placeholder="Escribe un mensaje..." placeholderTextColor={colors.muted} style={styles.input} multiline /><Pressable style={styles.send} onPress={sendMessage}><Icon name="send" size={18} color={colors.ink} /></Pressable></View>
  </KeyboardAvoidingView>;
}

const styles = StyleSheet.create({ page: { flex: 1, backgroundColor: colors.cream }, header: { paddingHorizontal: 24, paddingTop: 58, paddingBottom: 17, flexDirection: 'row', alignItems: 'center', gap: 13 }, headerCenter: { flex: 1 }, title: { color: colors.ink, fontSize: 17, fontWeight: '800' }, code: { color: colors.muted, fontSize: 10, marginTop: 4 }, avatar: { width: 38, height: 38, borderRadius: 13, backgroundColor: colors.lime, alignItems: 'center', justifyContent: 'center' }, avatarText: { color: colors.ink, fontSize: 11, fontWeight: '800' }, contact: { marginHorizontal: 24, backgroundColor: colors.mint, borderRadius: 15, padding: 12, flexDirection: 'row', alignItems: 'center', gap: 10 }, contactAvatar: { width: 39, height: 39, borderRadius: 13, backgroundColor: colors.lime, alignItems: 'center', justifyContent: 'center' }, contactInitials: { color: colors.ink, fontWeight: '800', fontSize: 11 }, contactName: { color: colors.ink, fontSize: 13, fontWeight: '800' }, contactRole: { color: colors.moss, fontSize: 10, marginTop: 3 }, call: { width: 36, height: 36, borderRadius: 12, backgroundColor: colors.white, alignItems: 'center', justifyContent: 'center' }, messages: { flex: 1 }, messageContent: { padding: 24, paddingBottom: 14 }, today: { textAlign: 'center', color: colors.muted, fontSize: 9, fontWeight: '800', letterSpacing: 1, marginBottom: 20 }, messageRow: { flexDirection: 'row', marginBottom: 12 }, mineRow: { justifyContent: 'flex-end' }, bubble: { maxWidth: '78%', paddingHorizontal: 14, paddingVertical: 10, borderRadius: 16 }, theirBubble: { backgroundColor: colors.white, borderBottomLeftRadius: 5 }, mineBubble: { backgroundColor: colors.moss, borderBottomRightRadius: 5 }, messageText: { color: colors.ink, fontSize: 13, lineHeight: 18 }, mineText: { color: colors.white }, time: { color: colors.muted, fontSize: 9, marginTop: 5, textAlign: 'right' }, mineTime: { color: '#B5D8C5' }, composer: { margin: 12, marginHorizontal: 24, backgroundColor: colors.white, borderRadius: 16, borderWidth: 1, borderColor: colors.line, minHeight: 52, paddingLeft: 15, paddingRight: 6, flexDirection: 'row', alignItems: 'center', gap: 8 }, input: { flex: 1, color: colors.ink, fontSize: 13, maxHeight: 80, paddingVertical: 12 }, send: { width: 39, height: 39, borderRadius: 13, backgroundColor: colors.lime, alignItems: 'center', justifyContent: 'center' } });
