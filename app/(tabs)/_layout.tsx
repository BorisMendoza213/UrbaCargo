import { Tabs } from 'expo-router';
import { Icon } from '@/components/Icon';
import { colors } from '@/src/theme';

export default function TabsLayout() {
  return <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: colors.moss, tabBarInactiveTintColor: '#9BAAA3', tabBarStyle: { height: 78, paddingTop: 10, borderTopColor: colors.line }, tabBarLabelStyle: { fontSize: 11, fontWeight: '700' } }}>
    <Tabs.Screen name="index" options={{ title: 'Inicio', tabBarIcon: ({ color }) => <Icon name="home-outline" size={22} color={color} /> }} />
    <Tabs.Screen name="envios" options={{ title: 'Mis envíos', tabBarIcon: ({ color }) => <Icon name="cube-outline" size={22} color={color} /> }} />
    <Tabs.Screen name="perfil" options={{ title: 'Perfil', tabBarIcon: ({ color }) => <Icon name="person-outline" size={22} color={color} /> }} />
  </Tabs>;
}