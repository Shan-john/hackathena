import asyncio
import time
from winsdk.windows.devices.sensors import Accelerometer

THRESHOLD = 0.15       # lower value means higher sensitivity (detects lighter taps)
COOLDOWN = 0.25        # ignore taps for 250ms after trigger

last_x = 0
last_trigger = 0

def on_reading_changed(sender, args):
    """Event handler for when the accelerometer reading changes."""
    global last_x, last_trigger
    
    reading = args.reading
    x = reading.acceleration_x
    
    delta_x = x - last_x
    last_x = x
    
    now = time.time()
    
    # We log high deltas
    if abs(delta_x) > THRESHOLD and (now - last_trigger) > COOLDOWN:
        if delta_x > 0:
            print(f"[{now:.2f}] RIGHT TAP (delta: {delta_x:.2f})")
        else:
            print(f"[{now:.2f}] LEFT TAP (delta: {delta_x:.2f})")
            
        last_trigger = now

async def detect_tap():
    accel = Accelerometer.get_default()

    if accel is None:
        print("No accelerometer found")
        return

    # To detect fast taps, we need the highest possible polling rate
    accel.report_interval = accel.minimum_report_interval
    
    print(f"Highly sensitive tap detection started.")
    print(f"Polling interval set to: {accel.report_interval}ms")
    print("Tap your device left or right to test...")
    
    # Register the event listener instead of manually polling
    token = accel.add_reading_changed(on_reading_changed)
    
    try:
        # Keep the script running
        while True:
            await asyncio.sleep(1)
    finally:
        # Clean up the event listener when exiting
        accel.remove_reading_changed(token)

if __name__ == "__main__":
    try:
        asyncio.run(detect_tap())
    except KeyboardInterrupt:
        print("\nExiting...")