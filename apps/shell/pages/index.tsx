// @ts-expect-error Tipagem não configurado no 'module federation'
import Example from '@microfrontend/home/example';

export function Index() {
  return (
    <div>
      Hello word from Shell!
      <br/>
      <Example/>
    </div>
  );
}

export default Index;
