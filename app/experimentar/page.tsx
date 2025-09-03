"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Android2,
  Download,
  ShieldCheck,
  ExclamationTriangle,
  QrCode,
  InfoCircle,
} from "react-bootstrap-icons";
import dynamic from "next/dynamic";


const QRCode = dynamic(() => import("react-qr-code"), { ssr: false });

const APK_URL =
  process.env.NEXT_PUBLIC_APK_URL ??
  "https://github.com/fabrica-de-inovacao/dicume_app/releases/download/release-beta-1.0.2/continue_a_instalacao_do_dicume_app.apk";

// Structured data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "DICUMÊ",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Android",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "BRL"
  },
  "downloadUrl": APK_URL,
  "description": "App de nutrição inteligente com semáforo nutricional para Android"
};

export default function ExperimentarPage() {
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    if (typeof navigator !== "undefined") {
      setIsAndroid(/android/i.test(navigator.userAgent));
    }
  }, []);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="pt-24 pb-16 lg:pt-28 lg:pb-24 bg-white">
      <div className="container-custom">
        <header className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-start justify-between gap-6"
          >
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-text-primary mb-2">
                Instalar DICUMÊ via APK (Android)
              </h1>
              <p className="text-text-secondary">
                Versão beta 1.0.2 • Requer Android 11+ • Instalação via arquivo
                APK
              </p>
            </div>
            <Android2 className="w-10 h-10 text-primary hidden md:block" />
          </motion.div>
        </header>

        {!isAndroid && (
          <div className="mb-6 rounded-lg border border-warning/40 bg-warning/10 p-4 text-warning flex items-start gap-3">
            <InfoCircle className="w-5 h-5 mt-0.5" />
            <div>
              Esta instalação está disponível apenas em dispositivos Android.
              Você pode continuar lendo as instruções aqui e realizar a
              instalação no seu celular Android.
            </div>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 rounded-2xl p-6 lg:p-8 shadow-soft mb-10"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-start">
            <div className="flex-1 space-y-4">
              <h2 className="text-xl font-semibold text-text-primary flex items-center gap-2">
                <Download className="w-5 h-5" />
                Baixar APK
              </h2>
              <p className="text-text-secondary">
                Toque no botão abaixo para baixar o instalador do aplicativo
                (APK) diretamente no seu dispositivo Android.
              </p>
              <a
                href={APK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-3 rounded-lg font-medium transition-colors duration-200 card-hover"
              >
                <Download className="w-5 h-5" />
                Baixar DICUMÊ (APK)
              </a>
              <div className="text-xs text-text-secondary">
                Dica: se o download não iniciar, verifique as permissões do
                navegador ou tente outro navegador (Chrome, Samsung Internet).
              </div>
            </div>

            <div className="w-full lg:w-64">
              <h3 className="text-sm font-semibold text-text-primary mb-2 flex items-center gap-2">
                <QrCode className="w-4 h-4" />
                QR Code (opcional)
              </h3>
              {/* QR CODE PLACEHOLDER
                 Substitua o bloco abaixo por um QR code real apontando para o APK_URL.
                 Tamanho recomendado: 256x256 em telas padrão, 320x320 em telas grandes.
              */}
              <div className="w-64 h-64 max-w-full">
                <div className="h-full w-full rounded-lg p-3 flex items-center justify-center bg-gradient-to-br from-white/80 to-gray-50 border border-outline/60 shadow-soft">
                  {typeof window !== "undefined" ? (
                    <div className="bg-white p-3 rounded-md shadow-sm flex items-center justify-center">
                      <QRCode
                        value={APK_URL}
                        size={200}
                        aria-label="QR code para baixar APK"
                      />
                    </div>
                  ) : (
                    <div className="text-text-secondary">
                      Gerando QR code...
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid lg:grid-cols-2 gap-6"
        >
          <div className="bg-white rounded-xl p-6 shadow-soft border border-outline/40">
            <h2 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" />
              Preparar o Android (origens desconhecidas)
            </h2>
            <ol className="list-decimal ml-5 space-y-2 text-sm text-text-secondary">
              <li>Abra Ajustes (Configurações) no seu dispositivo.</li>
              <li>
                Acesse Segurança e privacidade {">"} Instalar apps
                desconhecidos.
              </li>
              <li>
                Escolha o app que fará a instalação (normalmente o seu Navegador
                ou o app Arquivos).
              </li>
              <li>Ative “Permitir desta fonte”.</li>
              <li>Volte ao arquivo baixado para iniciar a instalação.</li>
            </ol>
            <p className="mt-3 text-xs text-text-secondary">
              Observação: Em Android 13/14/15, essa opção pode estar em Caminho
              alternativo: Apps {">"} Acesso especial {">"} Instalar apps
              desconhecidos.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-soft border border-outline/40">
            <h2 className="text-lg font-semibold text-text-primary mb-4">
              Instalação passo a passo
            </h2>
            <ol className="list-decimal ml-5 space-y-2 text-sm text-text-secondary">
              <li>Baixe o arquivo APK do DICUMÊ.</li>
              <li>
                Abra o APK a partir do download (notificação) ou pelo app
                Arquivos {">"} Downloads.
              </li>
              <li>Se solicitado, confirme “Permitir desta fonte”.</li>
              <li>Toque em Instalar e aguarde a conclusão.</li>
              <li>Ao finalizar, toque em Abrir para iniciar o app.</li>
            </ol>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-soft border border-outline/40">
            <h2 className="text-lg font-semibold text-text-primary mb-4">
              Variações por fabricante
            </h2>
            <div className="space-y-3 text-sm text-text-secondary">
              <div>
                <span className="font-medium text-text-primary">
                  Samsung (One UI):
                </span>
                <ul className="list-disc ml-5">
                  <li>
                    Configurações {">"} Aplicativos {">"} Acesso especial {">"}{" "}
                    Instalar apps desconhecidos.
                  </li>
                  <li>
                    Selecione o navegador/Arquivos e ative “Permitir desta
                    fonte”.
                  </li>
                </ul>
              </div>
              <div>
                <span className="font-medium text-text-primary">
                  Xiaomi (MIUI/HyperOS):
                </span>
                <ul className="list-disc ml-5">
                  <li>
                    Configurações {">"} Privacidade {">"} Proteção {">"}{" "}
                    Instalar apps de fontes desconhecidas.
                  </li>
                  <li>Ative para o navegador/Arquivos que você usar.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-soft border border-outline/40">
            <h2 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
              <ExclamationTriangle className="w-5 h-5" />
              Possíveis alertas e soluções
            </h2>
            <ul className="list-disc ml-5 space-y-2 text-sm text-text-secondary">
              <li>
                <span className="font-medium text-text-primary">
                  Play Protect bloqueou a instalação:
                </span>{" "}
                Abra Play Store {">"} Ícone do perfil {">"} Play Protect {">"}{" "}
                Configurações {">"} desative “Verificar apps com Play Protect”
                temporariamente. Tente instalar novamente e depois reative se
                desejar.
              </li>
              <li>
                <span className="font-medium text-text-primary">
                  Erro de “não foi possível instalar” ou “arquivo corrompido”:
                </span>{" "}
                Baixe novamente, confira sua conexão ou tente outro navegador.
              </li>
              <li>
                <span className="font-medium text-text-primary">
                  Erro de parse:
                </span>{" "}
                Certifique-se de que seu Android é 11 ou superior e que o
                arquivo baixou por completo.
              </li>
              <li>
                <span className="font-medium text-text-primary">
                  Espaço insuficiente:
                </span>{" "}
                Libere espaço e tente novamente.
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 bg-gray-50 rounded-xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
        >
          <div>
            <div className="text-sm text-text-secondary">
              Pronto para instalar?
            </div>
            <div className="text-text-primary font-semibold">
              DICUMÊ • Beta 1.0.2 • Android 11+
            </div>
          </div>
          <a
            href={APK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            <Download className="w-5 h-5" />
            Baixar agora
          </a>
        </motion.div>

        <div className="mt-6 text-xs text-text-secondary">
          Aviso de segurança: instale APKs somente de fontes confiáveis. Você
          pode remover a permissão de “Instalar apps desconhecidos” após
          concluir.
        </div>
      </div> 
    </section>
  </>
);
} 
