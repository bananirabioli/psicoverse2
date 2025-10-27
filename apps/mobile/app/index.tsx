import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { MobileCard as Card } from '../../../../packages/ui/src/mobile/Card'
import { MobileBadge as Badge } from '../../../../packages/ui/src/mobile/Badge'
import { Users, FileText, ClipboardCheck, MessageCircle } from 'lucide-react-native'

export default function Home() {
  return (
    <ScrollView className="flex-1 bg-slate-50">
      {/* Hero Section */}
      <View className="px-6 py-12">
        <Text className="text-4xl font-extrabold text-gray-900 leading-tight text-center">
          Encuentra tu <Text className="text-teal-500">equilibrio</Text> y bienestar
        </Text>
        <Text className="mt-4 text-lg text-gray-600 text-center max-w-sm mx-auto">
          PSICOVERSE es tu espacio seguro para explorar recursos de salud mental, conectar con profesionales y crecer a tu propio ritmo.
        </Text>
        
        <View className="mt-8 flex-row justify-center gap-4">
          <TouchableOpacity className="bg-teal-500 px-6 py-3 rounded-lg">
            <Text className="text-white font-semibold text-center">Buscar un Profesional</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-gray-200 px-6 py-3 rounded-lg">
            <Text className="text-gray-800 font-semibold text-center">Explorar Artículos</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Feature Cards */}
      <View className="px-6 pb-8">
        <View className="space-y-4">
          {/* Feature Card 1 */}
          <Card className="text-center">
            <View className="items-center mb-4">
              <View className="p-4 bg-teal-100 rounded-full">
                <Users className="w-8 h-8 text-teal-600" />
              </View>
            </View>
            <Text className="text-xl font-bold mb-2 text-center">Conecta con Expertos</Text>
            <Text className="text-gray-600 text-center">Accede a una red de psicólogos y terapeutas certificados listos para ayudarte.</Text>
          </Card>

          {/* Feature Card 2 */}
          <Card className="text-center">
            <View className="items-center mb-4">
              <View className="p-4 bg-teal-100 rounded-full">
                <FileText className="w-8 h-8 text-teal-600" />
              </View>
            </View>
            <Text className="text-xl font-bold mb-2 text-center">Contenido Confiable</Text>
            <Text className="text-gray-600 text-center">Artículos y resúmenes basados en evidencia científica para tu crecimiento personal.</Text>
          </Card>

          {/* Feature Card 3 */}
          <Card className="text-center">
            <View className="items-center mb-4">
              <View className="p-4 bg-teal-100 rounded-full">
                <ClipboardCheck className="w-8 h-8 text-teal-600" />
              </View>
            </View>
            <Text className="text-xl font-bold mb-2 text-center">Herramientas de Autoayuda</Text>
            <Text className="text-gray-600 text-center">Realiza tests validados para comprender mejor tus emociones y necesidades.</Text>
          </Card>
        </View>
      </View>

      {/* Bottom Navigation Placeholder */}
      <View className="bg-white border-t border-gray-200 px-6 py-4">
        <View className="flex-row justify-around">
          <TouchableOpacity className="items-center">
            <Users className="w-6 h-6 text-teal-500" />
            <Text className="text-xs font-medium mt-1 text-teal-500">Profesionales</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center">
            <FileText className="w-6 h-6 text-gray-500" />
            <Text className="text-xs font-medium mt-1 text-gray-500">Blog</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center">
            <ClipboardCheck className="w-6 h-6 text-gray-500" />
            <Text className="text-xs font-medium mt-1 text-gray-500">Tests</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center">
            <MessageCircle className="w-6 h-6 text-gray-500" />
            <Text className="text-xs font-medium mt-1 text-gray-500">Contacto</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}
