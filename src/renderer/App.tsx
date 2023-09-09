import './App.css';
import './radixThemes.css'; //copied from '@radix-ui/themes/styles.css'
// import '@radix-ui/themes/styles.css'; //DOESN'T WORK
import { Button, Theme, Text, ThemePanel } from '@radix-ui/themes';

function Hello() {
  return (
    <div>
      Hi
    </div>
  );
}

export default function App() {
  return (
    <Theme appearance="dark" accentColor="cyan" radius="large">
      <Button>TeSTs</Button>
      <Text>The quick brown fox jumps over the lazy dog.</Text>
      <ThemePanel />
    </Theme>
  );
}
