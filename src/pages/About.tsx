import { Users, ShieldCheck, Car, Award, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';

const About = () => {
  const { t, language } = useLanguage();

  const instructors = [
    {
      name: language === 'ta' ? 'செல்வராஜ் எம்' : 'Selvaraj M.',
      experience: language === 'ta' ? '20 ஆண்டுகள் அனுபவம்' : '20 years experience',
      specialty: language === 'ta' ? 'ஆரம்பநிலையாளர்கள் & பெண்கள்' : 'Beginners & Women Learners',
      languages: language === 'ta' ? 'தமிழ், ஆங்கிலம்' : 'Tamil, English',
    },
    {
      name: language === 'ta' ? 'ராஜேஷ் கே' : 'Rajesh K.',
      experience: language === 'ta' ? '15 ஆண்டுகள் அனுபவம்' : '15 years experience',
      specialty: language === 'ta' ? 'தேர்வு தயாரிப்பு' : 'RTO Test Preparation',
      languages: language === 'ta' ? 'தமிழ், ஆங்கிலம், தெலுங்கு' : 'Tamil, English, Telugu',
    },
    {
      name: language === 'ta' ? 'பிரேமா எஸ்' : 'Prema S.',
      experience: language === 'ta' ? '10 ஆண்டுகள் அனுபவம்' : '10 years experience',
      specialty: language === 'ta' ? 'பெண் மாணவர்கள்' : 'Women Learners',
      languages: language === 'ta' ? 'தமிழ், ஆங்கிலம்' : 'Tamil, English',
    },
    {
      name: language === 'ta' ? 'குமார் வி' : 'Kumar V.',
      experience: language === 'ta' ? '12 ஆண்டுகள் அனுபவம்' : '12 years experience',
      specialty: language === 'ta' ? 'நெடுஞ்சாலை ஓட்டம்' : 'Highway Driving',
      languages: language === 'ta' ? 'தமிழ், ஆங்கிலம், கன்னடம்' : 'Tamil, English, Kannada',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Hero */}
      <section className="gradient-hero section-padding">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('about.title')}
          </h1>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                {t('about.story.title')}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t('about.story.content')}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {language === 'ta' 
                  ? 'சேலம் மற்றும் அருகிலுள்ள பகுதிகளில் உள்ள ஆயிரக்கணக்கான மாணவர்களுக்கு நாங்கள் பயிற்சி அளித்துள்ளோம். எங்கள் மாணவர்களில் பெரும்பாலோர் முதல் முயற்சியிலேயே RTO தேர்வில் வெற்றி பெறுகின்றனர்.'
                  : 'We have trained thousands of students across Salem and nearby areas. Most of our students clear their RTO tests on the first attempt.'}
              </p>
            </div>
            <div className="bg-card rounded-3xl p-8 card-elevated border border-border/50">
              <h3 className="text-xl font-bold text-foreground mb-4">{t('about.mission.title')}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.mission.content')}
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-8 h-8 text-secondary" />
                  <span className="text-sm font-medium text-foreground">{language === 'ta' ? 'பாதுகாப்பு முதல்' : 'Safety First'}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 text-primary" />
                  <span className="text-sm font-medium text-foreground">{language === 'ta' ? 'சான்றிதழ் பயிற்சியாளர்கள்' : 'Certified Trainers'}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-secondary" />
                  <span className="text-sm font-medium text-foreground">{language === 'ta' ? 'தனிப்பட்ட கவனம்' : 'Personal Attention'}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-8 h-8 text-primary" />
                  <span className="text-sm font-medium text-foreground">{language === 'ta' ? 'பலமொழி ஆதரவு' : 'Multi-language'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Instructors */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t('about.instructors.title')}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {instructors.map((instructor, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 text-center card-elevated border border-border/50">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <h4 className="font-bold text-foreground mb-1">{instructor.name}</h4>
                <p className="text-sm text-muted-foreground mb-3">{instructor.experience}</p>
                <div className="space-y-1 text-sm">
                  <p className="text-secondary font-medium">{instructor.specialty}</p>
                  <p className="text-muted-foreground">{instructor.languages}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Vehicles */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              {t('about.vehicles.title')}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {t('about.vehicles.content')}
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-muted rounded-2xl p-6 text-center">
                <Car className="w-12 h-12 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground">{language === 'ta' ? 'இரட்டை கட்டுப்பாடு' : 'Dual Control'}</h4>
                <p className="text-sm text-muted-foreground mt-1">{language === 'ta' ? 'பாதுகாப்பான பயிற்சி' : 'Safe Training'}</p>
              </div>
              <div className="bg-muted rounded-2xl p-6 text-center">
                <ShieldCheck className="w-12 h-12 text-secondary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground">{language === 'ta' ? 'ABS & ஏர்பேக்' : 'ABS & Airbags'}</h4>
                <p className="text-sm text-muted-foreground mt-1">{language === 'ta' ? 'நவீன பாதுகாப்பு' : 'Modern Safety'}</p>
              </div>
              <div className="bg-muted rounded-2xl p-6 text-center">
                <Award className="w-12 h-12 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground">{language === 'ta' ? 'காப்பீடு உள்ளது' : 'Fully Insured'}</h4>
                <p className="text-sm text-muted-foreground mt-1">{language === 'ta' ? 'முழு பாதுகாப்பு' : 'Full Coverage'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default About;
