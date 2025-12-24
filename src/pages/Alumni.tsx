import { Link } from 'react-router-dom';
import { Users, Award, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';

const Alumni = () => {
  const { t, language } = useLanguage();

  const stats = [
    { 
      value: '5000+', 
      label: t('alumni.stats.total'),
      icon: Users,
    },
    { 
      value: '450+', 
      label: t('alumni.stats.thisYear'),
      icon: Calendar,
    },
  ];

  const featuredAlumni = [
    {
      name: language === 'ta' ? 'அருண் குமார்' : 'Arun Kumar',
      year: '2019',
      location: language === 'ta' ? 'சேலம்' : 'Salem',
      story: language === 'ta' 
        ? 'இங்கு கற்றுக்கொண்டு இப்போது ஓலா டிரைவர் ஆக வேலை செய்கிறேன். நல்ல வருமானம் கிடைக்கிறது.'
        : 'Learned here and now working as Ola driver. Getting good income.',
    },
    {
      name: language === 'ta' ? 'சுமதி ராஜன்' : 'Sumathi Rajan',
      year: '2020',
      location: language === 'ta' ? 'ஓமலூர்' : 'Omalur',
      story: language === 'ta'
        ? '40 வயதில் கற்றுக்கொண்டேன். இப்போது தினமும் ஆபீஸ் சொந்த காரில் போகிறேன்.'
        : 'Learned at 40. Now I drive to office daily in my own car.',
    },
    {
      name: language === 'ta' ? 'கார்த்திக் செல்வம்' : 'Karthik Selvam',
      year: '2021',
      location: language === 'ta' ? 'தர்மபுரி' : 'Dharmapuri',
      story: language === 'ta'
        ? 'பயிற்சி முடித்து முதல் attempt-ல் பாஸ் ஆனேன். இப்போது வெளிநாட்டில் driving வேலை கிடைத்தது.'
        : 'Passed first attempt after training. Got driving job abroad now.',
    },
    {
      name: language === 'ta' ? 'பிரியா மோகன்' : 'Priya Mohan',
      year: '2022',
      location: language === 'ta' ? 'சேலம்' : 'Salem',
      story: language === 'ta'
        ? 'பெண் trainer இருப்பதால் மிகவும் comfortable ஆக இருந்தது. இப்போது சொந்த scooty-யில் கல்லூரி போகிறேன்.'
        : 'Lady trainer made me very comfortable. Now I go to college on my own scooty.',
    },
    {
      name: language === 'ta' ? 'வெங்கடேஷ் கே' : 'Venkatesh K.',
      year: '2023',
      location: language === 'ta' ? 'மெச்சேரி' : 'Mecheri',
      story: language === 'ta'
        ? 'ரிஃப்ரஷர் கோர்ஸ் எடுத்தேன். 8 வருடம் gap-க்கு பிறகு மீண்டும் நம்பிக்கை வந்தது.'
        : 'Took refresher course. Got confidence back after 8 years gap.',
    },
    {
      name: language === 'ta' ? 'லதா சுந்தரம்' : 'Latha Sundaram',
      year: '2024',
      location: language === 'ta' ? 'சேலம்' : 'Salem',
      story: language === 'ta'
        ? '55 வயதில் கற்றுக்கொண்டேன். வயது ஒரு தடை இல்லை என்று நிரூபித்தேன்!'
        : 'Learned at 55. Proved that age is not a barrier!',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Hero */}
      <section className="gradient-hero section-padding">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('alumni.title')}
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            {t('alumni.subtitle')}
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 text-center card-elevated border border-border/50">
                <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Alumni */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            {language === 'ta' ? 'எங்கள் வெற்றிகரமான மாணவர்கள்' : 'Our Successful Alumni'}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredAlumni.map((alumni, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 card-elevated border border-border/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-xl">{alumni.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{alumni.name}</h4>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{language === 'ta' ? 'பயிற்சி: ' : 'Trained: '}{alumni.year}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-secondary mb-3">
                  <MapPin className="w-4 h-4" />
                  <span>{alumni.location}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  "{alumni.story}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Alumni Network CTA */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="bg-card rounded-3xl p-8 md:p-12 card-elevated border border-border/50 text-center max-w-2xl mx-auto">
            <Award className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {t('alumni.join')}
            </h3>
            <p className="text-muted-foreground mb-6">
              {language === 'ta' 
                ? 'எங்கள் நிறுவனத்தில் படித்தீர்களா? உங்கள் வெற்றிக் கதையை பகிருங்கள்! WhatsApp குழுவில் சேருங்கள்.'
                : 'Trained with us? Share your success story! Join our WhatsApp group.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="whatsapp" asChild>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                  {language === 'ta' ? 'WhatsApp குழுவில் சேர' : 'Join WhatsApp Group'}
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">
                  {language === 'ta' ? 'கருத்து பகிர' : 'Share Your Story'}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Alumni;
