import { useEffect, useRef } from "react";

function Bridge() {
  const widgetInitialized = useRef(false); // Track if the widget has been initialized

  useEffect(() => {
    const initializeWidget = () => {
      if (!window.deBridge) {
        console.warn("deBridge is not available yet."); // Handle the case where deBridge is not loaded
        return;
      }

      // Initialize the widget
      window.deBridge.widget({
        v: "1",
        element: "debridgeWidget",
        title: "",
        description: "",
        width: "600",
        height: "800",
        r: null,
        supportedChains: JSON.stringify({
          inputChains: {
            "1": "all",
            "10": "all",
            "56": "all",
            "100": "all",
            "137": "all",
            "1088": "all",
            "1890": "all",
            "7171": "all",
            "8453": "all",
            "42161": "all",
            "43114": "all",
            "59144": "all",
            "7565164": "all",
            "245022934": "all"
          },
          outputChains: {
            "1": "all",
            "10": "all",
            "56": "all",
            "100": "all",
            "137": "all",
            "1088": "all",
            "1890": "all",
            "7171": "all",
            "8453": "all",
            "42161": "all",
            "43114": "all",
            "59144": "all",
            "7565164": "all",
            "245022934": "all"
          }
        }),
        inputChain: 56,
        outputChain: 1,
        inputCurrency: "",
        outputCurrency: "",
        address: "",
        showSwapTransfer: true,
        amount: "",
        outputAmount: "",
        isAmountFromNotModifiable: false,
        isAmountToNotModifiable: false,
        lang: "en",
        mode: "deswap",
        isEnableCalldata: false,
        styles: "eyJhcHBCYWNrZ3JvdW5kIjoiIzE3NDY0NCIsImFwcEFjY2VudEJnIjoiIzE3NDY0NCIsImJhZGdlIjoiIzBlMjgyNyIsImJvcmRlclJhZGl1cyI6MjAsImZvbnRGYW1pbHkiOiIiLCJwcmltYXJ5QnRuQmciOiIjZjJlNjUxIiwic2Vjb25kYXJ5QnRuQmciOiIiLCJsaWdodEJ0bkJnIjoiIiwiaXNOb1BhZGRpbmdGb3JtIjpmYWxzZSwiYnRuUGFkZGluZyI6eyJ0b3AiOm51bGwsInJpZ2h0IjpudWxsLCJib3R0b20iOm51bGwsImxlZnQiOm51bGx9LCJidG5Gb250U2l6ZSI6bnVsbCwiYnRuRm9udFdlaWdodCI6bnVsbH0=",
        theme: "dark",
        isHideLogo: false,
        logo: "",
        disabledWallets: []
      });
    };

    // Load the deBridge script if it's not already loaded
    if (!window.deBridge) {
      const script = document.createElement('script');
      script.src = "https://v1.debridge.finance/assets/scripts/widget.js";
      script.async = true;

      // Once the script loads, initialize the widget
      script.onload = () => {
        initializeWidget();
      };

      document.body.appendChild(script);

      // Cleanup function to remove the script if the component unmounts
      return () => {
        document.body.removeChild(script);
      };
    } else {
      // If the script is already loaded, just initialize the widget if not done before
      if (!widgetInitialized.current) {
        initializeWidget();
        widgetInitialized.current = true; // Mark as initialized
      }
    }
  }, []); // Empty dependency array ensures this runs on mount

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <div
          style={{
            borderRadius: '20px', background: '#99999914',
            boxShadow: '0 8px 32px 0 #0C3F3D',
            backdropFilter: 'blur( 4px )',
            border: '1px solid rgba( 255, 255, 255, 0.18 )',
            WebkitBackdropFilter: 'blur( 4px )',
            padding: '20px'
          }}
        >
          <div id="debridgeWidget"></div>
        </div>
      </div>
      <br />
    </>
  );
}


export default Bridge;

export async function getStaticProps() {
  return {
    props: { title: 'Bridge' }
  }
}
