// Code generated by reactGen. DO NOT EDIT.

package hellomessage

import "myitcv.io/react"

type HelloMessageElem struct {
	react.Element
}

func buildHelloMessage(cd react.ComponentDef) react.Component {
	return HelloMessageDef{ComponentDef: cd}
}

func buildHelloMessageElem(props HelloMessageProps, children ...react.Element) *HelloMessageElem {
	return &HelloMessageElem{
		Element: react.CreateElement(buildHelloMessage, props, children...),
	}
}

func (h HelloMessageDef) RendersElement() react.Element {
	return h.Render()
}

// SetState is an auto-generated proxy proxy to update the state for the
// HelloMessage component.  SetState does not immediately mutate h.State()
// but creates a pending state transition.
func (h HelloMessageDef) SetState(state HelloMessageState) {
	h.ComponentDef.SetState(state)
}

// State is an auto-generated proxy to return the current state in use for the
// render of the HelloMessage component
func (h HelloMessageDef) State() HelloMessageState {
	return h.ComponentDef.State().(HelloMessageState)
}

// IsState is an auto-generated definition so that HelloMessageState implements
// the myitcv.io/react.State interface.
func (h HelloMessageState) IsState() {}

var _ react.State = HelloMessageState{}

// GetInitialStateIntf is an auto-generated proxy to GetInitialState
func (h HelloMessageDef) GetInitialStateIntf() react.State {
	return HelloMessageState{}
}

func (h HelloMessageState) EqualsIntf(val react.State) bool {
	return h.Equals(val.(HelloMessageState))
}

// IsProps is an auto-generated definition so that HelloMessageProps implements
// the myitcv.io/react.Props interface.
func (h HelloMessageProps) IsProps() {}

// Props is an auto-generated proxy to the current props of HelloMessage
func (h HelloMessageDef) Props() HelloMessageProps {
	uprops := h.ComponentDef.Props()
	return uprops.(HelloMessageProps)
}

func (h HelloMessageProps) EqualsIntf(val react.Props) bool {
	return h == val.(HelloMessageProps)
}

var _ react.Props = HelloMessageProps{}